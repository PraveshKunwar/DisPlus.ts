import { Client, GuildMember, Snowflake } from 'discord.js';

export class BaseUtil {
   protected client: Client;
   public constructor(client: Client) {
      this.client = client;
   }
   public isSnowflake(verify: string | Snowflake): boolean {
      if (typeof verify !== 'string') {
         return false;
      } else return true;
   }
   public async isMember(
      id: Snowflake,
      guild: Snowflake
   ): Promise<boolean> {
      const getGuild = await this.client.guilds.fetch({
         guild
      });
      const getMember = await getGuild.members.fetch({
         user: id
      });
      if (
         (await getGuild.members.fetch({ user: id })) ===
         undefined
      ) {
         return false;
      } else if (
         getMember instanceof GuildMember &&
         getMember !== undefined
      ) {
         return true;
      }
   }
}
