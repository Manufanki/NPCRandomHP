var HD; 
var HP;


Hooks.call("dropCanvasData", this, data);

console.log this.entity.data.type;

if (this.entity.data.type === "NPC")
{
	let HD = this.attributes.hitdice.value;
	let HP = new roll(HD).roll().total;
	let this.attributes.hp.value = HP;
	let this.attributes.hp.min = HP;
	let this.attributes.hp.max = HP;
}
