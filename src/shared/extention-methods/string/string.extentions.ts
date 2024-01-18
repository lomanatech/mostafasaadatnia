

interface String {
    toEmptyIfNull(): string;
    padZero(length: number): string;
    startsWith(searchTerm: string, ignoreCase: boolean): boolean;
    endsWith(searchTerm: string, ignoreCase: boolean): boolean;
    contains(searchTerm: string, ignoreCase: boolean): boolean;
    equals(value: string, ignoreCase: boolean): boolean;
    isEmpty(): boolean;
}

String.prototype.toEmptyIfNull = function (this: string): string {
    return this === null ? '' : this;
};

String.prototype.padZero = function (length: number): string {
    let s = this;
    while (s.length < length) {
        s = '0' + s;
    }
    return s as any;
};

String.prototype.contains = function (searchTerm: string, ignoreCase: boolean = false): boolean {
    if (ignoreCase) {
        return this.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return this.includes(searchTerm);
};

String.prototype.equals = function (value: string, ignoreCase: boolean = false): boolean {
    if (ignoreCase) {
        return this.toLowerCase() === value.toLowerCase();
    }
    return this === value;
};

String.prototype.isEmpty = function (): boolean {
    return this.trim().length < 1;
};

// String.prototype.startsWith = function(searchTerm: string, ignoreCase: boolean = false): boolean {
//     if (ignoreCase) {
//         return this.toLowerCase().startsWith(searchTerm.toLowerCase());
//     }
//     return this.startsWith(searchTerm);
// };

// String.prototype.endsWith = function(searchTerm: string, ignoreCase: boolean = false): boolean {
//     if (ignoreCase) {
//         return this.toLowerCase().endsWith(searchTerm.toLowerCase());
//     }
//     return this.endsWith(searchTerm);
// };