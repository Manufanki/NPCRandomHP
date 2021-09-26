// Looks at every instance a token is placed on the canvas 
Hooks.on("createToken", (TDoc, t1, t2) => {
	
        // Checks if its a NPC type of actor
	if (TDoc.actor.type === "NPC") {
		// getting the NPC Hit Dice
		let HD = TDoc.actor.data.data.attributes.hitDice.value;
		// rolling the NPC's hit points
		let HP = new Roll(HD, data = {}, options = {});
		HP.evaluate();
		// doing a little error checking to prevent any 0 HP mobs from spawning
		let tHP = HP.total;
		if (tHP < 1) {tHP = 1;}
		// assigning the random HP amount to the proper fields
		TDoc.actor.data.data.attributes.hp.value = tHP;
		TDoc.actor.data.data.attributes.hp.min = tHP;
		TDoc.actor.data.data.attributes.hp.max = tHP;
	}
});
