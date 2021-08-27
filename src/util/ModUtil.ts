import {
   Client,
   CommandInteraction,
   GuildMember,
   Message,
   Snowflake
} from 'discord.js';
import BaseUtil from './BaseUtil';

export default class ModUtil extends BaseUtil {
   public constructor(client: Client) {
      super(client);
   }
   /**
    *
    * @param target The target member to check.
    * @param other The other member to compare to.
    */
   public async isHigherPosition(
      messageOrCommandInteraction:
         | Message
         | CommandInteraction,
      target: Snowflake | GuildMember,
      other: Snowflake | GuildMember
   ) {
      if (
         target instanceof GuildMember ||
         other instanceof GuildMember
      ) {
         const tPosition = (target as GuildMember).roles
            .highest.position;
         const oPosition = (target as GuildMember).roles
            .highest.position;
         if (tPosition < oPosition) {
            return false;
         } else if (tPosition > oPosition) {
            return true;
         }
      } else if (
         typeof target === 'string' ||
         typeof other === 'string'
      ) {
         const fTMember =
            await messageOrCommandInteraction.guild.members.fetch(
               target
            );
         const fOMember =
            await messageOrCommandInteraction.guild.members.fetch(
               other
            );
      }
   }
}
