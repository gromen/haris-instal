export class EventBus {
  private _events = Object.create(null);

  on(event: string, fn: Function) {
    if (typeof fn !== 'function') {
      console.error('_EventsBus.on callback not function!');
      return;
    }

    if (this._events[event]) {
      this._events[event].push(fn);
    } else {
      this._events[event] = [fn];
    }

    return this;
  }

  emit(event: string, ...args: any[]) {
    const cbs: Function[] | null = this._events[event];
    if (cbs) {
      cbs.forEach((fn) => fn(...args));
    }

    return this;
  }

  off(event: string | string[], fn: Function) {
    // clear all
    if (!arguments.length) {
      this._events = Object.create(null);
      return this;
    }

    if (Array.isArray(event)) {
      for (let i = 0, len = event.length; i < len; i++) {
        this.off(event[i], fn);
      }

      return this;
    }

    if (this._events[event]) {
      const idx = this._events[event].indexOf(fn);
      if (idx !== -1) this._events[event].splice(idx, 1);
    }

    return this;
  }
}

export const eventBus = new EventBus();
