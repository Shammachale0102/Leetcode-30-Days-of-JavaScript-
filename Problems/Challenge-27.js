/*Compact Object:

Given an object or array obj, return a compact object. */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        return obj
            .map(compactObject) 
            .filter(Boolean);   
    } else if (obj && typeof obj === "object") {
        return Object.fromEntries(
            Object.entries(obj)
                .filter(([_, value]) => Boolean(value)) 
                .map(([key, value]) => [key, compactObject(value)]) 
        );
    }
    return obj; 
};
