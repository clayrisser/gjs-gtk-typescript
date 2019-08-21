imports.gi.versions.Gtk = '3.0';
const { Gtk } = imports.gi;

Gtk.init(null);

class MyWindow extends Gtk.Window {
  button: any;

  constructor() {
    super({ title: 'Hello World' });
    this.button = new Gtk.Button({ label: 'Click here' });
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
