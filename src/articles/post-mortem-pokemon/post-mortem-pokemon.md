Since the time I started learning how to program I had always wanted to make a Pokemon game. I remember playing countless hours of the original pokemon and its sequels
throughout my childhood. The game has a lot of complex systems that need to interact with each other which makes for an interesting project. Given that I am a bit older now and gained a bit more programming skills, I thought it would be a good time to attempt to create a clone of the Pokemon game's battle system.

**Goal of the Project**

The goals of this project were as follows.

- Learn Typescript

- Learn React Hooks

- Try out Organic Programming

- Figure out an architecture that would work for creating a Pokemon battle game

- Create an online server for players to play over the internet

This article will be easier to understand if you already have some knowledge
of how Pokemon works. Since its a complex game I may not go over certain parts of it in this article.

**Project Management**

For the project management side of this project I used the app Trello to
keep track of tasks that needed to be completed.

I decided to do everything month by month. At the start of the month I
would have a list a features written down of what I thought I could
accomplish in a month and a checklist of tasks associated with those
features.

I think it's important not to rely on pure willpower or motivation when
completing longer projects. Understanding how your brain works and being
able to trick it in order to maintain consistent work periods is
important.

In order to combat this I would make sure to have "gimme" tasks written
down at all times. These are small 5-10 minute tasks which were not
necessarily super important, but would allow me something easy to get
started with and checked off in a work session.

Those gimme tasks actually ended up being very important to maintaining
my discipline in completing this project. A lot of times I would log
onto my computer with the intention of just completing one of those
small tasks so I could feel like a made a bit of progress for the day. Doing that
one small task would easily end up turning into 2-3 hours of working as
the momentum of completing one thing led me wanting to do more.

**Organic Programming**

For this project I wanted to try out Organic Programming. To be honest,
I do not remember where I heard this term as I no longer can locate the
article in which I read it from. Either way it is more of a different
metaphor of viewing software development rather than a brand new
technique.

Sometimes people view software similar to construction, where its
architecture needs to be **_planned_** in detail. After that we
**_build_** the software and once its built we **_maintain_** the
software by fixing cracks and painting its metaphorical walls once in a
while. Even if project management techniques like Agile have tried to
make this a more iterative process, it still feels like for the most part
we view software as a bunch of mini construction projects that are
planned, built and maintained.

With Organic Programming the idea is to view software like a living
thing that is constantly evolving and adapting to its environment. In
this case the environment is the features that your users need and
evolving means aggressively refactoring your codebase to make things
easier for everyone involved. You do not make big architectural
decisions up front. Bur rather you defer architectural decisions until
you are 100% sure it will add value to your project. This is because
the more complex architecture you implement in a project the harder it
becomes to change.

The basic development loop for organic programming is as follows

1.  Program the simplest thing possible that gets the task or feature
    done.

2.  As you are programming, look for inefficiencies. Examples could be,
    A variable name is misleading, Did I introduce a bug accidently, Am
    I needing to keep too many things in my head to work on this part of
    the codebase

3.  Refactor to try to solve or minimize some of the issues as the last
    part of creating the feature.

This way, instead of treating refactoring as a separate task that is
more likely to get kicked down the road, you treat it as part of
implementing the feature. This has the effect of your codebase naturally
evolving based on the features you work on.

While using this mindset, I actually found it to work really well. For
the most part, the code base was kept in relatively good shape for the
content I needed to add in. Throughout the whole project I only had to
do 3 big refactors that would take just a couple hours each. Most of my
refactors were small 5-10 minute tasks that could easily be completed
and checked off.

Overall, I think Organic programming is a great way to be able to
develop software If you don't exactly know how you are going to
architect your code base right at the start. I think it would only work
best for smaller teams though. It takes great discipline to continuously
refactor so it may not be a good choice for larger teams where it would
be more difficult to enforce and manage. I think a healthy mixture of
planned and organic development will likely be the best way going
forward. You could definitely shortcut some things by starting with
architectures you know will have value, but keeping other parts of your
codebase open for evolution.

**Tech Stack**

This project was programmed in Typescript using React Hooks for the
Front End and Node.js, Express and socket.io for server. The server is
currently hosted on Heroku using a free dyno instance.

This was my first project using Typescript, and I was very satisfied
with the language. I don't think I will ever go back to programming in
vanilla Javascript as long as I can help it.

Sharing the code between the Front End and the Back End with TypeScript
was very valuable. I started programming the game logic in the front end
first. When it was time to program the server, it was relatively easy to
get it up and running, I just added a reference to the game logic code
path and was able to build a really basic server around it. If I was
building this from the beginning I would have structured my folders like
\[FrontEnd\]\[Game Logic\] \[BackEnd\]. In this case, my game logic code
is stored in the front end folder, but I did not see a reason to change
that since at that point the project was coming to a conclusion.

This was also my first time using React Hooks. I felt it great to use
for the more typical web dev type UI stuff. When it came to the actual
Pokemon Battle UI it felt like I was battling against React Hooks and
the functional style in order to get what I wanted done. This could just
be my inexperience of programming in a more functional style and I just
don't know how to solve certain problems nicely yet. But It was also
hard to search for information on how to get certain things done, I
believe this is because most people are not using React Hooks to program
games and the problems that I had were not typical problems. That being
said, React Hooks seems great for typical Web Development and could be a
fine prototyping tool for more UI heavy games. I could definitely see
myself using it to get something quick up and running.

**Game Logic Architecture**

The final architecture consists mainly of the parts below.

**GAME**

**_Handles all the logic for controlling each turn, for example
processing the actions that each player performed, deciding when or when
not to run certain functions etc._**

**DATA**

**_These are parts of the game that we were able to express in pure
data. In this case "data" are just Plain Old Typescript Objects with no
functions attached to them. In another system these could very easily be
grabbed from a database or saved from a file._**

- Species

```typescript
               {
            name: 'Charizard',
            elementalTypes: [ElementType.Fire, ElementType.Flying],
            baseStats: {
                hp: 78,
                attack: 84,
                defense: 78,
                spAttack: 109,
                spDefense: 85,
                speed: 100
            },
            weight:90.5
        },
        {
            name: 'Blastoise',
            elementalTypes: [ElementType.Water],
            baseStats: {
                hp: 79,
                attack: 83,
                defense: 100,
                spAttack: 85,
                spDefense: 105,
                speed: 78
            },
            weight:85.5
        },
        {
            name: 'Venusaur',
            elementalTypes: [ElementType.Grass, ElementType.Poison],
            baseStats: {
                hp: 80,
                attack: 82,
                defense: 83,
                spAttack: 100,
                spDefense: 100,
                speed: 80
            },
            weight:100
        },
```

- Pokemon

```typescript
    {

        species: "Charizard",
        evs: {
            defense: 4,
            spAttack: 252,
            speed: 252
        },
        techniques: [
            "Fire Blast",
            "Air Slash",
            "Hidden Power Grass",
            "Earthquake",
        ],
        nature: NatureType.Timid,
        heldItem: "Life Orb",
        ability: "Blaze",

    },
    {

        species: "Blastoise",
        evs: {
            hp: 252,
            defense: 252,
            spAttack: 4,
        },
        techniques: [
            "Surf",
            "Ice Beam",
            "Protect",
            "Toxic"
        ],
        nature: NatureType.Bold,
        heldItem: "Leftovers",
        ability: "Torrent"

    },

    {
        species: "Venusaur",
        evs: {
            hp: 4,
            spAttack: 252,
            speed: 252
        },
        techniques: [
            "Giga Drain",
            "Sludge Bomb",
            "Synthesis",
            "Knock Off"
        ],
        heldItem: "Black Sludge",
        ability: "Overgrow",
        nature: NatureType.Timid
    },
```

- Techniques

```typescript
    {
            name: "Flare Blitz",
            description: "The user cloaks itself in fire and charges the target. This also damages the user quite a lot. This attack may leave the target with a burn",
            pp: 24,
            power: 120,
            accuracy: 100,
            damageType: DamageType.Physical,
            elementalType: ElementType.Fire,
            makesContact: true,
            beforeExecuteEffect: {
                type: EffectType.StatusRestore,
                forStatus: Status.Frozen
            },
            effects: [
                {
                    type: EffectType.Recoil,
                    recoilType: RecoilDamageType.PercentDamageDealt,
                    amount: 33.33,
                },
                {
                    type: EffectType.InflictStatus,
                    status: Status.Burned,
                    chance: 10,
                    target: TargetType.Enemy
                }
            ]
        },
        {
            name: "Low Kick",
            description: "A powerful low kick that makes the target fall over. It inflicts greater damage on heavier targets.",
            pp: 24,
            power: 0,
            accuracy: 100,
            makesContact: true,
            damageType: DamageType.Physical,
            elementalType: ElementType.Fighting,
            damageEffect: { type: DamageEffectTypes.LowKick }
        },
        {
            name: "Coil",
            description: "The user coils up and concentrates. This raises its Attack and Defense stats as well as its accuracy.",
            pp: 32,
            power: 0,
            accuracy: 100,
            damageType: DamageType.Status,
            elementalType: ElementType.Poison,
            effects: [
                {
                    type: EffectType.StatBoost,
                    stat: Stat.Attack,
                    chance: 100,
                    amount: 1,
                    target: TargetType.Self
                },
                {
                    type: EffectType.StatBoost,
                    stat: Stat.Defense,
                    chance: 100,
                    amount: 1,
                    target: TargetType.Self
                },
                {
                    type: EffectType.StatBoost,
                    stat: Stat.Accuracy,
                    chance: 100,
                    amount: 1,
                    target: TargetType.Self
                }
            ]
        },
        {
            name: "Headbutt",
            description: "The user sticks out its head and attacks by charging straight into the target. It may also make the target flinch.",
            pp: 24,
            power: 70,
            accuracy: 100,
            damageType: DamageType.Physical,
            elementalType: ElementType.Normal,
            makesContact: true,
            effects: [{
                type: EffectType.InflictVolatileStatus,
                status: VolatileStatusType.Flinch,
                chance: 30,
                target: TargetType.Enemy
            }]
        },
```

**EFFECTS**

**_These are functions which can directly change the state of a game.
For example a technique like Synthesis will heal a Pokemon. This happens
by calling the ApplyHealingEffect function._**

```typescript
export function InflictVolatileStatus(
  game: IGame,
  pokemon: Pokemon,
  status: VolatileStatusType,
  source: Pokemon
) {
  const targetPokemon = pokemon;
  const vStatus = GetVolatileStatus(status);

  if (pokemon.hasSubstitute && pokemon !== source) {
    return;
  }

  if (!vStatus.CanApply(game, targetPokemon)) {
    return;
  }
  targetPokemon.volatileStatuses.push(vStatus);
  vStatus.OnApply(game, targetPokemon);
  game.AddMessage(vStatus.InflictedMessage(targetPokemon));
}

function ApplyHealingEffect(
  game: IGame,
  pokemon: Pokemon,
  effect: HealthRestoreEffect
) {
  if (pokemon.currentStats.hp >= pokemon.originalStats.hp) {
    return;
  }
  if (effect.restoreType === HealthRestoreType.Flat) {
    game.ApplyHealing(pokemon, effect.amount);
  } else if (effect.restoreType === HealthRestoreType.PercentMaxHealth) {
    const amount = Math.floor(pokemon.originalStats.hp / (100 / effect.amount));
    game.ApplyHealing(pokemon, amount);
  }
}
```

**BATTLE BEHAVIOURS**

**_These are classes or objects which contain callback functions which
will be called at certain parts of the turn structure. For example the
Magic Guard Ability below modifies any indirect damage(like poison or
confusion damage) received to 0._**

Abilities,

```typescript
class MagicGuardAbility extends AbstractAbility {
  name = 'Magic Guard';
  description = 'The Pokémon only takes damage from attacks.';

  ModifyIndirectDamage(game: IGame, pokemon: Pokemon, damage: number) {
    return 0;
  }
}

class EffectSporeAbility extends AbstractAbility {
  name = 'Effect Spore';
  description =
    'Contact with the Pokémon may inflict poison, sleep, or paralysis on its attacker.';

  OnDamageTakenFromTechnique(
    game: IGame,
    attackingPokemon: Pokemon,
    defendingPokemon: Pokemon,
    move: Technique,
    damage: number
  ) {
    if (move.makesContact) {
      const shouldInflictStatus = game.Roll(30);
      if (shouldInflictStatus) {
        const statusToInflict = shuffle([
          Status.Poison,
          Status.Sleep,
          Status.Paralyzed,
        ])[0];
        game.AddMessage(
          `${defendingPokemon.name} has released spores from contact!`
        );
        ApplyInflictStatus({
          game: game,
          sourcePokemon: defendingPokemon,
          targetPokemon: attackingPokemon,
          status: statusToInflict,
        });
      }
    }
  }
}

class VoltAbsorbAbility extends AbstractAbility {
  name = 'Volt Absorb';
  description =
    'Restores HP if hit by an Electric-type move, instead of taking damage.';

  NegateDamage(game: IGame, move: Technique, pokemon: Pokemon): boolean {
    if (move.elementalType === ElementType.Electric) {
      //no damage taken, maybe write a message
      game.AddMessage(
        `It had no effect due to the pokemon's Volt Absorb Ability!`
      );
      game.AddMessage(
        `${pokemon.name} regained a bit of health due to Volt Absorb!`
      );
      return true;
    }
    return false;
  }
}

class MultiscaleAbility extends AbstractAbility {
  name = 'Multiscale';
  description =
    'Reduces the amount of damage the Pokémon takes when its HP is full.';

  ModifyDamageTaken(
    game: IGame,
    attackingPokemon: Pokemon,
    defendingPokemon: Pokemon,
    move: Technique,
    originalDamage: number
  ) {
    if (
      defendingPokemon.currentStats.hp === defendingPokemon.originalStats.hp
    ) {
      return originalDamage / 2;
    } else {
      return originalDamage;
    }
  }
}

class TechnicianAbility extends AbstractAbility {
  name = 'Technician';
  description = "Powers up the Pokémon's weaker moves.";

  ModifyTechnique(pokemon: Pokemon, technique: Technique) {
    if (technique.power <= 60) {
      let newTech = { ...technique };
      newTech.power = newTech.power * 1.5;
      return newTech;
    }
    return technique;
  }
}
```

HeldItem

```typescript
export class LeftoversHeldItem extends HeldItem {
  name: string = 'Leftovers';
  description =
    "An item to be held by a Pokémon. The holder's HP is gradually restored during battle.";
  EndOfTurn(game: IGame, pokemon: Pokemon) {
    const healing = Math.ceil(pokemon.originalStats.hp / 16);
    game.ApplyHealing(pokemon, healing);
    game.AddMessage(`${pokemon.name} has healed due to its leftovers!`);
  }
}

export class LifeOrbHeldItem extends HeldItem {
  name: string = 'Life Orb';
  description =
    'An item to be held by a Pokémon. It boosts the power of moves, but at the cost of some HP on each hit.';
  OnAfterDamageCalculated(
    attackingPokemon: Pokemon,
    move: Technique,
    defendingPokemon: Pokemon,
    damage: number,
    damageInfo: any
  ): number {
    return damage * 1.3;
  }
  OnAfterDamageAttack(
    game: IGame,
    attackingPokemon: Pokemon,
    defendingPokemon: Pokemon,
    technique: Technique,
    damageDealt: number
  ) {
    //take recoil damage
    const recoilDamage = attackingPokemon.originalStats.hp / 10;
    game.ApplyIndirectDamage(attackingPokemon, recoilDamage);
    game.AddMessage(
      `${attackingPokemon.name} suffered recoil damage due to its Life Orb`
    );
  }
}

export class LumBerryHeldItem extends HeldItem {
  name: string = 'Lum Berry';
  description =
    'A Berry to be consumed by Pokémon. If a Pokémon holds one, it can recover from any status condition during battle.';

  Update(game: IGame, pokemon: Pokemon) {
    //check the opposing pokemon
    //unnerve ability prevents use of berries.
    const otherPokemon = game.GetOtherPokemon(pokemon);
    if (otherPokemon.ability.toLowerCase() === 'unnerve') {
      return;
    }

    let hasCured: boolean = false;

    if (pokemon.status !== Status.None) {
      game.SetStatusOfPokemon(pokemon.id, Status.None);
      hasCured = true;
    }
    const confusions = pokemon.volatileStatuses.filter(
      (vStat) => vStat.type === VolatileStatusType.Confusion
    );
    if (confusions.length > 0) {
      pokemon.volatileStatuses.forEach((vStat) => {
        vStat.Remove(game, pokemon);
        hasCured = true;
      });
    }

    if (hasCured) {
      game.AddMessage(
        `${pokemon.name} has been cured of its status effects due to its Lum Berry!`
      );
      pokemon.heldItem = new NoHeldItem();
    }
  }
}
```

Weather

```typescript
export class SunnyWeather extends Weather {
  name: WeatherType = WeatherType.Sunny;

  OnApply(game: IGame) {
    game.AddMessage('The sunlight turned harsh!');
  }

  ModifyTechnique(pokemon: Pokemon, tech: Technique) {
    if (
      ['moonlight', 'synthesis', 'morning sun'].includes(
        tech.name.toLowerCase()
      )
    ) {
      const newTech = _.cloneDeep(tech);
      if (!newTech.effects) {
        throw new Error(
          `Expected effect healing effect for move ${tech.name} but could not find one`
        );
      }
      const healingEffect = newTech.effects.find(
        (eff) => eff.type === EffectType.HealthRestore
      );
      if (healingEffect === undefined) {
        throw new Error(
          `Expected healing effect for move ${tech.name} but could not find one`
        );
      }
      (healingEffect as HealthRestoreEffect).amount = 66;
      return newTech;
    }
    if (['thunder', 'hurricane'].includes(tech.name.toLowerCase())) {
      const newTech = _.cloneDeep(tech);
      newTech.accuracy = 50; //hack to make the move bypass the accuracy check. think about having a flag to do so anyways.
      return newTech;
    }
    if (['solar beam'].includes(tech.name.toLowerCase())) {
      //Solar beam becomes a non charging move.
      const newTech = _.cloneDeep(tech);
      newTech.twoTurnMove = false;
      newTech.firstTurnStatus = undefined;
      return newTech;
    }
    return tech;
  }

  OnAfterDamageCalculated(
    pokemon: Pokemon,
    tech: Technique,
    defendingPokemon: Pokemon,
    damage: number,
    damageModifier: DamageModifierInfo,
    game: IGame
  ) {
    if (tech.elementalType === ElementType.Fire) {
      return damage * 1.5;
    }
    if (tech.elementalType === ElementType.Water) {
      return damage * 0.5;
    }
    return damage;
  }

  EndOfTurn(game: IGame) {
    this.currentTurn++;
    if (this.currentTurn >= this.duration) {
      game.AddMessage('The harsh sunlight faded.');
      game.field.weather = undefined; //stops the weather.
    }
  }
}
```

Hard Statuses

```typescript
const BurnStatus: HardStatus = {
  ...CreateBattleBehaviour(),
  ...{
    statusType: Status.Burned,
    curedString: 'has been cured of its burn!',
    inflictedMessage: 'has been burned!',
    CanApply(game: IGame, pokemon: Pokemon) {
      return !HasElementType(pokemon, ElementType.Fire);
    },
    BeforeAttack(game: IGame, pokemon: Pokemon) {
      return;
    },
    EndOfTurn(game: IGame, pokemon: Pokemon) {
      const maxHp = pokemon.originalStats.hp;
      const burnDamage = Math.ceil(maxHp / 8);
      game.AddMessage(`${pokemon.name} is hurt by its burn`);
      game.ApplyIndirectDamage(pokemon, burnDamage);
    },
    OnAfterDamageCalculated(
      pokemon: Pokemon,
      techUsed: Technique,
      defendingPokemon: Pokemon,
      damage: number,
      modifierInfo: DamageModifierInfo,
      game: IGame
    ) {
      if (techUsed.damageType === DamageType.Physical) {
        return damage * 0.5;
      }
      return damage;
    },
  },
};

class FrozenStatus extends BattleBehaviour implements HardStatus {
  statusType = Status.Frozen;
  curedString = 'has been thawed!';
  inflictedMessage = 'is frozen!';
  private thawChance: number = 20;

  CanApply(game: IGame, pokemon: Pokemon) {
    return (
      !HasElementType(pokemon, ElementType.Ice) &&
      game.field.weather?.name !== WeatherType.Sunny
    );
  }

  BeforeAttack(game: IGame, pokemon: Pokemon) {
    game.AddMessage(`${pokemon.name} is frozen!`);
    if (game.Roll(this.thawChance)) {
      //Pokemon Wakes Up
      game.SetStatusOfPokemon(pokemon.id, Status.None);

      const thawEffect: StatusChangeEvent = {
        type: BattleEventType.StatusChange,
        targetPokemonId: pokemon.id,
        status: Status.None,
        message: `${pokemon.name} is not frozen anymore!`,
      };
      game.AddEvent(thawEffect);
    } else {
      pokemon.canAttackThisTurn = false;
    }
  }

  OnDamageTakenFromTechnique(
    game: IGame,
    attackingPokemon: Pokemon,
    defendingPokemon: Pokemon,
    move: Technique,
    damage: number
  ) {
    if (
      move.elementalType === ElementType.Fire &&
      defendingPokemon.status === Status.Frozen
    ) {
      defendingPokemon.status = Status.None;
      defendingPokemon._statusObj = GetHardStatus(Status.None);
      const thawEffect: StatusChangeEvent = {
        type: BattleEventType.StatusChange,
        status: Status.None,
        targetPokemonId: defendingPokemon.id,
        message: `${attackingPokemon.name}'s fire attack thawed ${defendingPokemon.name}!`,
      };
      game.AddEvent(thawEffect);
    }
  }
}

const ParalyzeStatus: HardStatus & { cantMoveChance: number } = {
  ...CreateBattleBehaviour(),
  ...{
    statusType: Status.Paralyzed,
    curedString: 'has been cured of paralysis!',
    inflictedMessage: 'is now paralyzed!',
    cantMoveChance: 25,
    BeforeAttack(game: IGame, pokemon: Pokemon) {
      if (game.Roll(this.cantMoveChance)) {
        const cantAttackEffect: CannotAttackEvent = {
          type: BattleEventType.CantAttack,
          targetPokemonId: pokemon.id,
          reason: Status.Paralyzed,
        };
        game.AddEvent(cantAttackEffect);
        pokemon.canAttackThisTurn = false;
        return;
      }
      //do the before logic here.
    },
    CanApply(game: IGame, pokemon: Pokemon) {
      return !HasElementType(pokemon, ElementType.Electric);
    },
    Update(game: IGame, pokemon: Pokemon) {
      if (
        pokemon.statMultipliers.filter((sm) => sm.tag === 'paralyze').length ===
        0
      ) {
        pokemon.statMultipliers.push({
          stat: Stat.Speed,
          multiplier: 0.5,
          tag: 'paralyze',
        });
      }
    },
    OnRemoved(game: IGame, pokemon: Pokemon) {
      _.remove(pokemon.statMultipliers, (sm) => sm.tag === 'paralyze');
    },
  },
};

class PoisonStatus extends BattleBehaviour implements HardStatus {
  statusType = Status.Poison;
  curedString = 'has been cured of poison!';
  inflictedMessage = ' has been poisoned!';

  EndOfTurn(game: IGame, pokemon: Pokemon) {
    //apply poison damage
    //poison damage is 1/16 of the pokemons max hp
    const maxHp = pokemon.originalStats.hp;
    const poisonDamage = Math.ceil(maxHp / 8);
    game.AddMessage(`${pokemon.name} is hurt by poison`);
    game.ApplyIndirectDamage(pokemon, poisonDamage);
  }
  CanApply(game: IGame, pokemon: Pokemon) {
    return !HasElementType(pokemon, ElementType.Poison);
  }
}
```

Volatile Statuses

```typescript
export class ConfusionVolatileStatus extends VolatileStatus {
  type: VolatileStatusType = VolatileStatusType.Confusion;

  private unconfuseChance: number = 25;
  private damageSelfChance: number = 50;

  BeforeAttack(game: IGame, pokemon: Pokemon) {
    if (pokemon.canAttackThisTurn === false) {
      return;
    }

    if (game.Roll(this.unconfuseChance)) {
      //the attacking pokemon is no longer confused
      _.remove(
        pokemon.volatileStatuses,
        (vstatus) => vstatus.type === 'confusion'
      );
      game.AddMessage(`${pokemon.name} has snapped out of its confusion!`);
    } else {
      game.AddMessage(`${pokemon.name} is confused!`);
      if (game.Roll(this.damageSelfChance)) {
        game.AddMessage(`${pokemon.name} has hurt itself in its confusion`);
        game.ApplyIndirectDamage(pokemon, 40);
        //pokemon skips the turn as well
        pokemon.canAttackThisTurn = false;
      }
    }
  }

  InflictedMessage(pokemon: Pokemon): string {
    return `${pokemon.name} is now confused!`;
  }
}

export class OutragedVolatileStatus extends VolatileStatus {
  type = VolatileStatusType.Outraged;
  amountOfTurns: number = 3;
  currentTurn: number = 1;

  InflictedMessage(pokemon: Pokemon): string {
    return '';
  }

  OnApply(game: IGame, pokemon: Pokemon) {
    this.amountOfTurns = shuffle([2, 3])[0];
  }

  ForceAction(game: IGame, player: Player, pokemon: Pokemon) {
    //force an overwrite of whatever action might be in there.
    const outrageTechnique = GetTech('outrage');

    const forcedTechnique: ForcedTechniqueAction = {
      playerId: player.id,
      pokemonId: pokemon.id,
      technique: outrageTechnique,
      type: Actions.ForcedTechnique,
    };
    game.SetInitialPlayerAction(forcedTechnique);
  }

  BeforeAttack(game: IGame, pokemon: Pokemon) {
    if (pokemon.canAttackThisTurn === false) {
      this.Remove(game, pokemon);
      return;
    }
    game.AddMessage(`${pokemon.name} is outraged!`);
    this.currentTurn++;
  }

  OnTechniqueMissed(game: IGame, pokemon: Pokemon) {
    this.Remove(game, pokemon);
  }

  EndOfTurn(game: IGame, pokemon: Pokemon) {
    if (this.currentTurn >= this.amountOfTurns) {
      this.Remove(game, pokemon);
      game.AddMessage(`${pokemon.name} is no longer outraged.`);
      InflictVolatileStatus(
        game,
        pokemon,
        VolatileStatusType.Confusion,
        pokemon
      );
    }
    //Remove Outraged Status if Attack missed for whatever reason.
  }
}
```

Due to our use of Organic Programming, this architecture was not
actually designed from the start, but was refactored into over time
based on ease of implementing certain features. It is not perfect and
has some flaws and inconsistencies with the implementation, but I feel
like this architecture could be a good start for many other turn-based
games I want to make in the future.

One thing I would do different was try to find a way to express the battle behaviours in a more modular way. Currently they are classes that we need to instantiate, which makes it
impossible to modify them at runtime like we can with the Techniques or Pokemon. If I could create them in a modular way and modify them at runtime it would open up a lot more ways that
I could program in certain abilities.

**Artificial Intelligence**

Artificial Intelligence is sort of a buzzword these days, so when I say
Artificial Intelligence, i'm not talking about neural networks or machine learning.
In this project the AI is just based off of an algorithm.

I wanted to add a bunch of Pokemon, Techniques and Abilities to the game
so I researched a way that could write an A.I. without needing to
constantly update it. This led me to two A.I. algorithms

- Monte Carlo Simulation

- MiniMax

They are both similar and act based on a (State,Action) =>
ResultingState function. So in order to do this, we had to be able to
simulate our game in the background. Thankfully since I had already had
my game mostly decoupled from everything else this was really easy to implement
and play around with.

The Monte Carlo Simulation method simulates the game for each possible
action until a termination point is reached. It then will give you the
action which led to the most winning points which will be the one your
AI picks to use.

The MiniMax method is slightly different. It too simulates the game but
it relies on an Evaluate method to score the resulting state based on
whether it is good or bad for the AI. This means it does not need to
simulate the entire game to figure out a move, but it depends on the
programmer knowing enough about the game in order to make a good enough
Evaluate method.

Both of these methods could be visualized by a tree of nodes containing
the action, resulting state and the score.

I don't want to get more into detail, but more information about these
methods can be easily found with a google search.

There were some issues with implementing these in our game though.

- Both players select a move at the same time and the move you select
  might depend on the move you think your opponent will select. This
  means we cannot simply rely on a state and our action, we would also
  have to consider our opponents action as well.

- There is a huge random element to the game, which means that we
  cannot assume that performing the same action on the same state will
  produce the same result. This means we cannot easily cache previously computed results
  for a performance boost.

- Performance of the game loop matters a lot with this type of A.I.
  And as such we needed to spend time optimizing the game loop.

Overall I ended up using a poorly implemented MiniMax method, but it
actually worked very well. I was able to get something up and running in
less than 2 days. Originally I wanted to simulate many levels deep but
ran into both performance and inexperience issues. Because I didn't want
to spend too much time figuring it out, I decided to only run 1
simulation per action and no more than 2 levels deep.

After I got the AI running, I had an idea. What if I build a simulation
mode where I was able mass battle 2 AI's together and be able to see the
results?

This is what drove the devlopment of the AI vs AI Simulation mode.

Specifically in the Team Battles simulation mode, I simulate a bunch of
battles with random teams for each AI. The pokemon on the winning team
each get a win on the charts and the pokemon on the losing team each get
a loss.

I had a lot of fun with this, but to my surprise it came with a few
positive things I didn't think of at first.

- Simulating a bunch of games is a great way to test your code for
  runtime errors.

- You could check to see which characters (in our case Pokemon) are
  over-performing / under-performing and potentially balance the game
  based on this information.

- Its also a good way to benchmark the performance of your game, and
  find which areas are the biggest problem.

These points are such huge advantages that I will be adding this feature
to any turn based game I make in the future, even if it is just for
debug purposes.

My favourite bug that I found this way was a never-ending game between 2
Clefables that couldn't kill each other. This only would happen about
one in every 2000 game simulations. Sometimes the simulation would just stop,
but not throw any runtime error which confused me. At first I thought
maybe it was some sort of browser problem that might be stopping my
script from running for too long, but it kept happening randomly,
sometimes early on in the simulation and sometimes later on. Once I checked what was going
on in the game logs when the simulations stalled, it showed me that 2
Clefables had been battling each other for thousands of turns. This
should have never happened as the official Pokemon game has a built in
feature to stop infinite games (the struggle move) but mine was bugged
due to Clefable's ability preventing the recoil damage that should have
been dealt. This was something that would have been extremly hard to catch otherwise without a large amount of people testing the game.

**Overall Lessons Learned**

- Typescript was very fun to use, will use it over Javascript whenever
  possible

- Organic Programming is a great mindset to have when you don't know
  how to setup your architecture before hand

- MonteCarlo / MiniMax A.I. algorithms are very general algorithms
  that could be useful in a variety of projects.

- Try to keep objects as pure data when possible, as it can make a
  system very flexible.

- React Hooks could be fine to use for user interfaces in games, but we might want to use an actual game engine if we plan on making a full game.

-I wish I had kept track of my total hours worked

-While I had fun with the project and learned a lot, 8 months felt a bit too long to spend on one project. My next project I want to be a bit shorter
