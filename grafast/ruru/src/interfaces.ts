import type { RuruHTMLParts } from "./server.js";

declare global {
  namespace GraphileConfig {
    interface Preset {
      ruru?: RuruConfig;
    }
  }
}

export interface RuruConfig {
  port?: number;
  endpoint?: string;
  subscriptionEndpoint?: string;
  subscriptions?: boolean;
  enableProxy?: boolean;

  /**
   * Override the HTML parts that are used to build the Ruru
   */
  htmlParts?: Partial<RuruHTMLParts>;
}
