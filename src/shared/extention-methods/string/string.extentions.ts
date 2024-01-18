String.prototype.toEmptyIfNull = function (this: string): string {
    return this === null ? '' : this;
};