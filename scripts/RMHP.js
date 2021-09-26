Hooks.on("createToken", (TDoc, t1, t2) => {
	

	if (TDoc.actor.type === "NPC") {
		let HD = TDoc.actor.data.data.attributes.hitDice.value;
		let HP = new Roll(HD, data = {}, options = {});
		HP.evaluate();
		let tHP = HP.total;
		console.log (tHP);
		if (tHP < 1) {tHP = 1;}
		console.log (tHP);
		TDoc.actor.data.data.attributes.hp.value = tHP;
		TDoc.actor.data.data.attributes.hp.min = tHP;
		TDoc.actor.data.data.attributes.hp.max = tHP;
	}
});
