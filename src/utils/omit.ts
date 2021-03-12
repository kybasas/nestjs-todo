export function omit(propsToOmit: string[] , obj: object){
    if (obj === null || obj === undefined) return;

    const newObject = {}

    for (const key in obj){
        if (!propsToOmit.includes(key)) newObject[key] = obj[key]
    }

    return newObject
}