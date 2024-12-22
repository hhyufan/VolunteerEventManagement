String.prototype.toDuration = function ()  {
    const [, hours = 0, minutes = 0, seconds = 0] =
        this.match(/(?:(\d+)时)?(?:(\d+)分)?(?:(\d+)秒)?/) ?? [];
    return (+hours * 3600) + (+minutes * 60) + (+seconds);
};
console.log("12秒".toDuration());
