import { Client } from "../client";

export class CreateClient {
  static readonly type = "[Client] Create";
  constructor(public payload: Client) {}
}

