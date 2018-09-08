let currentId = 0
let currentIdTime = Date.now()

global.p3xr.nextId = () => {

    const now = Date.now();
    if (currentIdTime !== now) {
        currentId = 0;
        currentIdTime = now
    }
    const comingId = ++currentId;
    const randomHex = global.p3xr.random().reverse().padStart(15, '0');
    const timeHex = currentIdTime.toString(16).padStart(12, '0').reverse()
    const comingIdHex = comingId.toString(16).padStart(3, '0').reverse();
    const newId = `P3Xid${timeHex}${comingIdHex}${randomHex}`;
    //console.log(newId)
    return newId
}

