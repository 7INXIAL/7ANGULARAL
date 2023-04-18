import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  private _value: 'sunny' | 'night' = 'sunny';
  private topic = {
    _value: this._value,
    get value(): 'sunny' | 'night' {
      return this._value;
    },
    set value(v: 'sunny' | 'night') {
      if (v === 'sunny' || v === 'night') {
        const r = document.documentElement;
        r.className = v;
        this._value = v;
      }
    },
  };
  constructor() {}

  useTopic() {
    return this.topic;
  }
}
