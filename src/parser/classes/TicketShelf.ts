import { type ObservedArray, YTNode } from '../helpers.js';
import type { RawNode } from '../types/index.js';
import TicketEvent from './TicketEvent.js';
import { Parser } from '../index.js';

export default class TicketShelf extends YTNode {
  static type = 'TicketShelf';

  title: string;
  events: ObservedArray<TicketEvent> | null;
  information_text: string;
  use_calendar_avatar: boolean;

  constructor(data: RawNode) {
    super();
    this.title = data.title;
    this.events = Parser.parse(data.events, true, TicketEvent);
    this.information_text = data.informationText;
    this.use_calendar_avatar = data.useCalendarAvatar;
  }
}