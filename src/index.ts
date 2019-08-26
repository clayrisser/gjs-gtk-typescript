imports.gi.versions.Gtk = '3.0';
import Gtk from 'gnome-gtk';

Gtk.init(null);

class MyWindow extends Gtk.Window {
  button: Gtk.Button;

  constructor() {
    super(Gtk.WindowType.GTK_WINDOW_TOPLEVEL);
    this.button = new Gtk.Button();
    this.button.label = 'Click here';
    this.button.connect('clicked', this.handleClicked);
    this.add(this.button);
  }

  handleClicked() {
    console.log('Hello World');
  }
}

const win = new MyWindow();
win.connect('delete-event', () => Gtk.main_quit());
win.show_all();
Gtk.main();
