declare interface GI {
  versions: Versions;
  Gtk: any;
  GObject: any;
}

declare interface Versions {
  Gtk: string;
  GObject: string;
}

declare const imports: { gi: GI };

declare function print(message: string): void;
