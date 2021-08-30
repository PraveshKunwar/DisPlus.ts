import {
   Client,
   GuildMember,
   PermissionResolvable
} from 'discord.js';
import { ERROR_GEN } from '..';
import { BaseUtil } from './BaseUtil';

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
      target: GuildMember,
      other: GuildMember
   ): Promise<boolean> {
      if (
         !(target instanceof GuildMember) ||
         !(other instanceof GuildMember)
      ) {
         throw new Error(
            ERROR_GEN(
               'Displus.ts: target and other must be a valid guild member.'
            )
         );
      }
      if (
         target instanceof GuildMember ||
         other instanceof GuildMember
      ) {
         const tPosition = target.roles.highest.position;
         const oPosition = target.roles.highest.position;
         if (tPosition < oPosition) {
            return false;
         } else if (tPosition > oPosition) {
            return true;
         }
      }
   }
   public async hasPerms(
      target: GuildMember,
      perms: PermissionResolvable
   ): Promise<boolean> {
      const memberPerms = target.permissions.has(perms);
      if (memberPerms == true) {
         return true;
      }
      if (memberPerms == false) {
         return false;
      }
   }
}
