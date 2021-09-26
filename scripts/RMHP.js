Hooks.on("createToken", (TDoc, t1, t2) => {
  if (TDoc.actor.type === "NPC") {
    let HD = TDoc.actor.data.data.attributes.hitDice.value;
    let HP = new Roll(HD, (data = {}), (options = {}));
    HP.evaluate();
    if (HP.total < 1) {
      HP.total = 1;
    }
    TDoc.actor.data.data.attributes.hp.value = HP.total;
    TDoc.actor.data.data.attributes.hp.min = HP.total;
    TDoc.actor.data.data.attributes.hp.max = HP.total;
  }
});
