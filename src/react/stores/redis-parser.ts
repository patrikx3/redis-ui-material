/**
 * Pure utility functions for parsing Redis responses.
 * No framework dependency — exact port of Angular RedisParserService.
 */

export function parseInfoArray(options: { line: string; divider?: string; fieldDivider?: string }): Record<string, string> {
    const { line } = options
    const divider = options.divider ?? ','
    const fieldDivider = options.fieldDivider ?? '='
    const rows = line.split(divider)
    const obj: Record<string, string> = {}
    for (const row of rows) {
        const rowLine = row.split(fieldDivider)
        obj[rowLine[0]] = (rowLine[1] ?? '').trim()
    }
    return obj
}

export function parseRedisInfo(str: string): any {
    const lines = str.split('\n')
    const obj: any = {}
    let section: string | undefined
    let currentSectionObj: any = {}
    let hadSection = false
    let pikaIndex = 0

    for (const line of lines) {
        if (line.startsWith('#')) {
            if (hadSection) continue
            hadSection = true
            if (section !== undefined) obj[section] = currentSectionObj
            section = line.substring(1).toLowerCase().trim()
            currentSectionObj = {}
        } else if (line.length > 2) {
            hadSection = false
            if (line.includes(':')) {
                const lineArray = line.split(':')
                const value = lineArray[1] ?? ''
                currentSectionObj[lineArray[0]] = value.includes(',')
                    ? parseInfoArray({ line: value.trim() })
                    : value.trim()
            } else {
                const [key, ...rest] = line.split(/ (.+)/)
                const values = rest[0] ?? ''
                const value = values
                    .split(',')
                    .map((item: string) => `${pikaIndex}-${item.trim()}`)
                    .join(',')
                if (currentSectionObj.hasOwnProperty('db0')) {
                    Object.assign(currentSectionObj['db0'],
                        value.includes(',') ? parseInfoArray({ line: value.trim() }) : value.trim())
                } else {
                    currentSectionObj['db0'] = value.includes(',')
                        ? parseInfoArray({ line: value.trim() })
                        : value.trim()
                }
                pikaIndex++
            }
        }
    }
    if (section !== undefined && Object.keys(currentSectionObj).length > 0) {
        obj[section] = currentSectionObj
    }

    obj.keyspaceDatabases = {}
    if (obj.hasOwnProperty('keyspace')) {
        Object.keys(obj.keyspace).forEach((key) => {
            obj.keyspaceDatabases[parseInt(key.substring(2))] = true
        })
    }

    return obj
}

export function consoleParse(responseResult: any): string {
    if (responseResult !== null && typeof responseResult === 'object') {
        return Object.keys(responseResult).map(key => responseResult[key]).join('\n')
    }
    return responseResult
}
