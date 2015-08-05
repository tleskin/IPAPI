import DS from 'ember-data';

let Recipe = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  instructions: DS.attr('string'),
  gravity: DS.attr('string'),
  time_to_make: DS.attr('string')
});

Recipe.reopenClass({
  FIXTURES: [
      {
      "id": 1,
      "type_id": 1,
      "name": "The Plinian Legacy Double IPA",
      "description": "Brewed with Columbus, Centennial, Amarillo® and Simply Select Hop Blend, this quintessential double IPA is an homage to the #1 beer in America — as voted by the AHA — and one of the most sought-after brews of the last decade. Brew it for yourself with one of our most popular Double IPA recipe kits.",
      "instructions": "1. Remove the liquid Wyeast pack from the refrigerator,\nand “smack” as shown on the back of the yeast package.\nLeave it in a warm place (70–80° F) to incubate until the\npack begins to inflate. Allow at least 3 hours for inflation;\nsome packs may take up to several days to show inflation.\nDo not brew with inactive yeast — we can replace the\nyeast, but not a batch that fails to ferment properly. If\nyou are using dry yeast, no action is needed.\nON BREWING DAY\n2. Collect and heat 2.5 gallons of water.\n3. For mail-order customers grains for extract kits come\ncrushed by default, but if you requested uncrushed\ngrains, crush them now. Pour crushed grain into supplied\nmesh bag and tie the open end in a knot.\n- Add 0.25 oz Amarillo hops to kettle along with steeping grains\nSteep for 20 minutes or until water reaches 170°F.\nRemove bag and discard.\n4. Bring to a boil, remove the kettle from the burner and\nstir in the 4 lbs Pilsen DME.\n5. Return wort to boil. The mixture is now called “wort”,\nthe brewer’s term for unfermented beer.\n- Add 10 mL of Hopshot and boil for 90 minutes\n- 45 minutes before the end of the boil add 1 oz Columbus hops.\n- 20 minutes before the end of the boil add 1 oz Simply\nSelect Hop Blend\n- 15 minutes before the end of the boil add the 6 lbs\nPilsen malt syrup.\n- At the end of the 90 minute boil turn off the flame and add\nthe 0.75 lbs Corn Sugar, 1.5 oz Centennial and 2.5 oz Simply\nSelect Hop Blend hops and allow to steep for 10–15 minutes\nbefore chilling.\n6. Cool the wort. After the hop stand is finished, cool the\nwort to approximately 100° F as rapidly as possible. Use a\nwort chiller, or put the kettle in an ice bath in your sink.\n7. Sanitize fermenting equipment and yeast pack. While\nthe wort cools, sanitize the fermenting equipment –\nfermenter, lid or stopper, fermentation lock, funnel, etc –\nalong with the yeast pack and a pair of scissors.\n8. Fill primary fermenter with 2 gallons of cold water,\nthen pour in the cooled wort. Leave any thick sludge in\nthe bottom of the kettle.\nTHE PLINIAN LEGACY\n9. Add more cold water as needed to bring the\nvolume to 6 gallons.\n10. Aerate the wort. Seal the fermenter and rock back\nand forth to splash for a few minutes, or use an aeration\nsystem and diffusion stone.\n11. Optional: if you have our Mad Brewer Upgrade or\nGravity Testing kits, measure specific gravity of the wort\nwith a hydrometer and record.\n12. Add yeast once the temperature of the wort is 78°F or\nlower (not warm to the touch). Use the sanitized scissors\nto cut off a corner of the yeast pack, and carefully pour\nthe yeast into the primary fermenter.\n13. Seal the fermenter. Add approximately 1 tablespoon of\nwater to the sanitized fermentation lock. Insert the lock\ninto rubber stopper or lid, and seal the fermenter.\n14. Move the fermenter to a warm, dark, quiet spot until\nfermentation begins.\nBEYOND BREWING DAY, WEEKS 1–2\n15. Active fermentation begins. Within approximately\n48 hours of Brewing Day, active fermentation will\nbegin – there will be a cap of foam on the surface of\nthe beer, and you may see bubbles come through the\nfermentation lock.\n16. Active fermentation ends. Approximately 1–2 weeks\nafter brewing day, active fermentation will end: the cap\nof foam falls back into the new beer, bubbling in the\nfermentation lock slows down or stops.\n17. Transfer beer to secondary fermenter. Sanitize\nsiphoning equipment and an airlock and carboy bung or\nstopper. Siphon the beer from the primary fermenter into\nthe secondary.\nBEYOND BREWING DAY—\nSECONDARY FERMENTATION\n18. Secondary fermentation. Allow the beer to condition\nin the secondary fermenter for 2–4 weeks\nbefore proceeding with the next step. Timing now is\nsomewhat flexible.\n19. Add the dry hops in two different stages.\nDry Hops #1:\nAdd 10–14 days before bottling\n1.5 oz Columbus, 1 oz Centennial, 1 oz Simply\nSelect Hop Blend\nDry Hops #2:\nAdd 4–5 days before bottling\n0.5 oz Columbus, 0.5 oz Simply Select Hop Blend,\n0.25 oz Centennial, 0.25 oz Amarillo\nBOTTLING DAY—ABOUT 1 MONTH\nAFTER BREWING DAY\n20. Sanitize siphoning and bottling equipment.\n21. Mix a priming solution (a measured amount of sugar\ndissolved in water to carbonate the bottled beer) of 2/3\ncup priming sugar in 16 oz water. Bring the solution to a\nboil and pour into the bottling bucket.\n22. Siphon beer into bottling bucket and mix with priming\nsolution. Stir gently to mix—don’t splash.\n23. Fill and cap bottles.\n1–2 WEEKS AFTER BOTTLING DAY\n24. Condition bottles at room temperature for 1–2 weeks.\nAfter this point, the bottles can be stored cool or cold.\n25. Serving. Pour into a clean glass, being careful to leave\nthe layer of sediment at the bottom of the bottle.",
      "created_at": "2015-07-30T20:32:44.987Z",
      "updated_at": "2015-07-30T20:32:44.987Z",
      "gravity": "1.070",
      "time_to_make": "6 Weeks"
      },
      {
      "id": 2,
      "type_id": 2,
      "name": "American Wheat",
      "description": "A familiar style made popular by microbreweries all\nover the US. Like their German cousins, American wheat\nbeers feature large proportions of malted wheat in the\ngrain bill and are naturally cloudy in appearance. Unlike\nGerman Weizenbiers, though, American wheat beers\nhave a bit more hop character and are fermented with a\nmilder-tasting yeast, resulting in a more clean, neutral\nfinish. Wyeast’s US Hefeweizen strain makes for a spritzy,\nrefreshing warm-weather crowd-pleaser.",
      "instructions": "1. Remove the liquid Wyeast pack from the refrigerator,\nand “smack” as shown on the back of the yeast package.\nLeave it in a warm place (70–80° F) to incubate until the\npack begins to inflate. Allow at least 3 hours for inflation;\nsome packs may take up to several days to show inflation.\nDo not brew with inactive yeast — we can replace the\nyeast, but not a batch that fails to ferment properly. If\nyou are using dry yeast, no action is needed.\nNOTE: IF YOU ARE USING DRY YEAST OR\nWHITE LABS YEAST, NO ACTION IS NEEDED.\nON BREWING DAY\n2. Collect and heat 2.5 gallons of water.\n3. Bring to a boil and add 6 lb Wheat malt syrup.\nRemove the kettle from the burner and stir in the\nWheat malt syrup.\n4. Return wort to boil. The mixture is now called “wort”,\nthe brewer’s term for unfermented beer.\n- Add 1 oz Willamette hops, and boil for 60 minutes.\n- Add 1 oz Cascade hops 15 minutes before the end of the boil.\n5. Cool the wort. When the 60-minute boil is finished,\ncool the wort to approximately 100° F as rapidly as\npossible. Use a wort chiller, or put the kettle in an ice\nbath in your sink.\n6. Sanitize fermenting equipment and yeast pack. While\nthe wort cools, sanitize the fermenting equipment –\nfermenter, lid or stopper, fermentation lock, funnel, etc –\nalong with the yeast pack and a pair of scissors.\n7. Fill primary fermenter with 2 gallons of cold water,\nthen pour in the cooled wort. Leave any thick sludge in\nthe bottom of the kettle.\n8. Add more cold water as needed to bring the\nvolume to 5 gallons.\n9. Aerate the wort. Seal the fermenter and rock back\nand forth to splash for a few minutes, or use an aeration\nsystem and diffusion stone.\n10. OPTIONAL: if you have our Mad Brewer Upgrade or\nGravity Testing kits, measure specific gravity of the wort\nwith a hydrometer and record.\n11. Add yeast once the temperature of the wort is 78°F or\nlower (not warm to the touch). Use the sanitized scissors\nto cut off a corner of the yeast pack, and carefully pour\nthe yeast into the primary fermenter.\nAMERICAN WHEAT BEER\n12. Seal the fermenter. Add approximately 1 tablespoon of\nwater to the sanitized fermentation lock. Insert the lock\ninto rubber stopper or lid, and seal the fermenter.\n13. Move the fermenter to a warm, dark, quiet spot until\nfermentation begins.\nBEYOND BREWING DAY, WEEKS 1–2\n14. Active fermentation begins. Within approximately 48\nhours of Brewing Day, active fermentation will begin –\nthere will be a cap of foam on the surface of the beer,\nand you may see bubbles come through the fermentation\nlock. The optimum fermentation temperature for this\nbeer is 60–72º F – move the fermenter to a warmer or\ncooler spot as needed.\n15. Active fermentation ends. Approximately 1–2 weeks\nafter brewing day, active fermentation will end: the cap\nof foam falls back into the new beer, bubbling in the\nfermentation lock slows down or stops.\nBOTTLING DAY—ABOUT 2 WEEKS\nAFTER BREWING DAY\n16. Sanitize siphoning and bottling equipment.\n17. Mix a priming solution (a measured amount of sugar\ndissolved in water to carbonate the bottled beer) of 2/3\ncup priming sugar in 16 oz water. Bring the solution to a\nboil and pour into the bottling bucket.\n18. Siphon beer into bottling bucket and mix with priming\nsolution. Stir gently to mix—don’t splash.\n19. Fill and cap bottles.\n2 WEEKS AFTER BOTTLING DAY\n20. Condition bottles at room temperature for 2 weeks.\nAfter this point, the bottles can be stored cool or cold.\n21. Serving. Pour into a clean glass, being careful to leave\nthe layer of sediment at the bottom of the bottle. Cheers! ",
      "created_at": "2015-07-30T20:32:45.125Z",
      "updated_at": "2015-07-30T20:32:45.125Z",
      "gravity": "1.043",
      "time_to_make": "4 Weeks"
      },
      {
      "id": 3,
      "type_id": 3,
      "name": "Kenny's Stout",
      "description": "A familiar style made popular by microbreweries all\nover the US. Like their German cousins, American wheat\nbeers feature large proportions of malted wheat in the\ngrain bill and are naturally cloudy in appearance.",
      "instructions": "1. Remove the liquid Wyeast pack from the refrigerator,\nand “smack” as shown on the back of the yeast package.\nLeave it in a warm place (70–80° F) to incubate until the\npack begins to inflate. Allow at least 3 hours for inflation;\nsome packs may take up to several days to show inflation.\nDo not brew with inactive yeast — we can replace the\nyeast, but not a batch that fails to ferment properly. If\nyou are using dry yeast, no action is needed.",
      "created_at": "2015-07-30T20:32:45.150Z",
      "updated_at": "2015-07-30T20:32:45.150Z",
      "gravity": "1.04",
      "time_to_make": "5 Weeks"
      },
      {
      "id": 4,
      "type_id": 4,
      "name": "Pale Ale",
      "description": "A familiar style made popular by microbreweries all\nover the US. Like their German cousins, American wheat\nbeers feature large proportions of malted wheat in the\ngrain bill and are naturally cloudy in appearance.",
      "instructions": "1. Remove the liquid Wyeast pack from the refrigerator,\nand “smack” as shown on the back of the yeast package.\nLeave it in a warm place (70–80° F) to incubate until the\npack begins to inflate. Allow at least 3 hours for inflation;\nsome packs may take up to several days to show inflation.\nDo not brew with inactive yeast — we can replace the\nyeast, but not a batch that fails to ferment properly. If\nyou are using dry yeast, no action is needed.",
      "created_at": "2015-07-30T20:32:45.171Z",
      "updated_at": "2015-07-30T20:32:45.171Z",
      "gravity": "1.06",
      "time_to_make": "5 Weeks"
      },
      {
      "id": 5,
      "name": "Sour",
      "description": "A familiar style made popular by microbreweries all\nover the US. Like their German cousins, American wheat\nbeers feature large proportions of malted wheat in the\ngrain bill and are naturally cloudy in appearance.",
      "instructions": "1. Remove the liquid Wyeast pack from the refrigerator,\nand “smack” as shown on the back of the yeast package.\nLeave it in a warm place (70–80° F) to incubate until the\npack begins to inflate. Allow at least 3 hours for inflation;\nsome packs may take up to several days to show inflation.\nDo not brew with inactive yeast — we can replace the\nyeast, but not a batch that fails to ferment properly. If\nyou are using dry yeast, no action is needed.",
      "created_at": "2015-07-30T20:32:45.197Z",
      "updated_at": "2015-07-30T20:32:45.197Z",
      "gravity": "1.04",
      "time_to_make": "5 Weeks"
      }
  ]
});

export default Recipe;
