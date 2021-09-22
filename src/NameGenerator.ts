class NameGenerator {
    private static attrs = ['Juicy','Fresh','Tasty','Hot','Cheap'];
    private static names = ['Apples','Bananas','Bikes','Cars','Flow-ers'];

    static generateNew() {
        const attr = this.attrs[Math.floor(Math.random()*this.attrs.length)];
        const name = this.names[Math.floor(Math.random()*this.names.length)];

        return `${attr} ${name}`;
    }
}

export default NameGenerator;
