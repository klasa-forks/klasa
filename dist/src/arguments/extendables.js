"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const klasa_1 = require("klasa");
class CoreMultiArgument extends klasa_1.MultiArgument {
    constructor(store, directory, file) {
        super(store, directory, file, { aliases: ['...extendable'] });
    }
    get base() {
        return this.store.get('extendable');
    }
}
exports.default = CoreMultiArgument;
//# sourceMappingURL=extendables.js.map