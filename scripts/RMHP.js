Hooks.on("createToken", (token, tokenData, options, userId) => {
	rollHP(token);
  });
  
async function rollHP(token) {
	if (token.actor && token.actor.data.type === "npc") {
	  console.log(`TEST: New token is linked to an NPC`);
  
	  // Getting the NPC Hit Dice formula
	  let formula = token.actor.data.data.attributes.hp.formula;
  
	  // Rolling the NPC's hit points
	  let HP = new Roll(formula);
	  await HP.evaluate();
  
	  // Doing error checking to prevent any 0 HP mobs from spawning
	  let tHP = HP.total;
	  if (tHP < 1) {
		tHP = 1;
	  }
  
	  // Assigning the random HP amount to the proper fields
	  token.actor.data.data.attributes.hp.value = tHP;
	  token.actor.data.data.attributes.hp.max = tHP;
  
	  console.log(`TEST: Set HP for ${token.actor.name} to ${tHP}`);
	}
  }
