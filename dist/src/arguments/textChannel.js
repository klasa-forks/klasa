"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const klasa_1 = require("klasa");
class CoreArgument extends klasa_1.Argument {
    async run(argument, possible, message) {
        const channelID = klasa_1.Argument.regex.channel.exec(argument);
        const channel = channelID ? await this.client.channels.fetch(channelID[1]).catch(() => null) : null;
        if (channel && channel.type === 0 /* GuildText */)
            return channel;
        throw message.language.get('RESOLVER_INVALID_CHANNEL', possible.name);
    }
}
exports.default = CoreArgument;
//# sourceMappingURL=textChannel.js.map