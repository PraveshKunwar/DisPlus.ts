import { Client, Guild, Snowflake } from 'discord.js';

export default class BaseUtil {
   protected client: Client;
   public constructor(client: Client) {
      this.client = client;
   }
   public isSnowflake(verify: string | Snowflake): boolean {
      if (typeof verify !== 'string') {
         return false;
      } else return true;
   }
   public isGuild(guild: Guild): boolean {
      if (guild instanceof Guild) {
         return true;
      } else return false;
   }
   public async isMember(id: Snowflake) {
      const getMember = await this.client.users.fetch(id);
   }
}
