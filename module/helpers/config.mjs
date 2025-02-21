export const FITD = {};

/**
 * The set of Ability Scores used within the system.
 * @type {Object}
 */
FITD.abilities = {
  str: 'FITD.Ability.Str.long',
  dex: 'FITD.Ability.Dex.long',
  con: 'FITD.Ability.Con.long',
  int: 'FITD.Ability.Int.long',
  wis: 'FITD.Ability.Wis.long',
  cha: 'FITD.Ability.Cha.long',
};

FITD.abilityAbbreviations = {
  str: 'FITD.Ability.Str.abbr',
  dex: 'FITD.Ability.Dex.abbr',
  con: 'FITD.Ability.Con.abbr',
  int: 'FITD.Ability.Int.abbr',
  wis: 'FITD.Ability.Wis.abbr',
  cha: 'FITD.Ability.Cha.abbr',
};

FITD.attributes = {
  insight: 'FITD.Attribute.Insight.name',
  prowess: 'FITD.Attribute.Prowess.name',
  resolve: 'FITD.Attribute.Resolve.name'
};

FITD.actions = {
  hunt: 'FITD.Attribute.Insight.Action.Hunt',
  study: 'FITD.Attribute.Insight.Action.Study',
  survey: 'FITD.Attribute.Insight.Action.Survey',
  tinker: 'FITD.Attribute.Insight.Action.Tinker',
  finesse: 'FITD.Attribute.Prowess.Action.Finesse',
  prowl: 'FITD.Attribute.Prowess.Action.Prowl',
  skirmish: 'FITD.Attribute.Prowess.Action.Skirmish',
  wreck: 'FITD.Attribute.Prowess.Action.Wreck',
  attune: 'FITD.Attribute.Resolve.Action.Attune',
  command: 'FITD.Attribute.Resolve.Action.Command',
  consort: 'FITD.Attribute.Resolve.Action.Consort',
  sway: 'FITD.Attribute.Resolve.Action.Sway'
};