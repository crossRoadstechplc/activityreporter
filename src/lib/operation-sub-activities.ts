import type { Lang, SelectOption } from './config';

export type SubActivityGroup = { am: string; en: string; options: SelectOption[] };

export const nurserySubActivities: SelectOption[] = [
 {value:'land-clearing',am:'ምንጣሮ',en:'Land Clearing'},
 {value:'tree-felling',am:'ዛፍ መቁረጥ',en:'Tree Felling'},
 {value:'soil-heaping',am:'ለቦ አፈር መቆለል',en:'Soil heaping'},
 {value:'support-bed-prep',am:'መደብ ዝግጅት ሥራ',en:'Support bed preparation'},
 {value:'cutting-polytube',am:'ፖሊ ቲዩብ ቆረጣ',en:'Cutting polytube'},
 {value:'filling-polytube',am:'ፖሊቲዩብ ጥቅጠቃ',en:'Filling polytube'},
 {value:'arranging-polytube',am:'ፖሊ ድርድር',en:'Arranging polytube'},
 {value:'mulch-prep',am:'ጉዝጓዝ ዝግጅት',en:'Mulch material preparation'},
 {value:'sowing-seed-poly',am:'ፖሊቲዩብ ዘር ማፍሰስ',en:'Sowing seed in polybags'},
 {value:'mulch-application',am:'ጉዝጓዝ ማድረግ',en:'Mulch application'},
 {value:'shade-mat-prep',am:'ለዳስ ፍልጥ ዝግጅት',en:'Shade material preparation'},
 {value:'shade-construction',am:'ዳስ መስራት',en:'Shade construction'},
 {value:'mulch-removal',am:'ጉዝጓዝ ማንሳት',en:'Mulch removal'},
 {value:'seedling-weeding',am:'ችግኝ ማረም',en:'Weeding of seedlings'},
 {value:'thinning-shade',am:'ዳስ ማሳሳት',en:'Thinning shade'},
 {value:'shade-removal',am:'ዳስ ማንሳት',en:'Removal of shade'},
];

export const youngCoffeeSubActivities: SelectOption[] = [
 {value:'hoeing',am:'ኩትራ',en:'Hoeing'},
 {value:'fertilizing',am:'ማዳበሪያ ማድረግ',en:'Fertilizing'},
 {value:'ring-weeding',am:'ችግኝ ቡና ዙሪያ አረም',en:'Ring weeding of seedlings'},
 {value:'shade-tree-regulation',am:'ጥላ ዛፍ ቅንሳ',en:'Shade tree regulation'},
 {value:'compost-prep',am:'ኮምፖስት ዝግጅት',en:'Compost preparation'},
 {value:'ridge-construction',am:'እርከን ስራ',en:'Ridge construction'},
];

export const matureCoffeeSubActivities: SelectOption[] = [
 {value:'manual-weeding',am:'አረም ቁጥጥር በባጅራ',en:'Manual weeding'},
 {value:'chemical-weeding',am:'ፀረ-አረም መድሃኒት ርጭት',en:'Chemical weeding'},
 {value:'pruning',am:'ቡና ምቅሳ',en:'Pruning'},
 {value:'topping',am:'ቁመት መግታት',en:'Topping'},
 {value:'hand-desuckering',am:'መልመላና ቅጥያ ማሳሳት',en:'Handling & desuckering'},
 {value:'supporting-trees',am:'የወደቀ ቡና ማስደገፍ',en:'Supporting coffee trees'},
 {value:'watchman-tower',am:'የጥበቃ ማማ ስራ',en:'Watchman tower'},
];

export const infillingSubActivities: SelectOption[] = [
 {value:'peg-preparation',am:'ቸካል ዝግጅት',en:'Peg preparation'},
 {value:'layout-pegging',am:'ቅየሳና ቸካል መቸከል',en:'Layout & pegging'},
 {value:'holing',am:'ጉድጓድ ቁፋሮ',en:'Holing'},
 {value:'refilling',am:'አፈር መመለስ',en:'Refilling'},
 {value:'watch-tower-prep',am:'የጥበቃ ማማ ስራ',en:'Watchman tower preparation'},
 {value:'transplant-seedlings',am:'ችግኝ ማጓጓዝ',en:'Transplant seedlings'},
 {value:'planting',am:'ተከላ',en:'Planting'},
];

export const pickingSubActivityGroups: SubActivityGroup[] = [
 {
  am:'ቡና ለቀማና ተያያዥ ስራዎች',
  en:'Coffee Picking & Related Activities',
  options:[
   {value:'watch-tower-prep',am:'የጥበቃ ማማ ስራ',en:'Watchman tower preparation'},
   {value:'drying-material-prep',am:'ቡና ማድረቂያ ማቴሪያል ዝግጅትና ማጓጓዝ',en:'Drying bed material preparation & transport'},
   {value:'drying-bed-cleaning',am:'ቡና ማድረቂያ ቦታ ዝግጅት',en:'Drying bed cleaning'},
   {value:'drying-bed-construction',am:'ቡና ማድረቂያ አልጋ ስራ',en:'Drying bed construction'},
   {value:'picking-red-cherry',am:'ቀይ ቡና ለቀማ',en:'Picking red cherry'},
  ],
 },
 {
  am:'የምርት ዝግጅት ስራዎች',
  en:'Processing',
  options:[
   {value:'drying-cherry',am:'ቡና ማስጣት',en:'Drying cherry'},
   {value:'bed-maintenance',am:'አልጋ ስራ ዕድሳት',en:'Bed maintenance'},
   {value:'weighing-arranging',am:'ደረቅ ቡና መመዘንና መደርደር',en:'Weighing & arranging dry coffee'},
   {value:'load-farm-1-2',am:'ደረቅ ቡና መጫን ከእርሻ 1 - 2',en:'Load dry coffee Farm 1 to 2'},
   {value:'load-farm-hall',am:'ደረቅ ቡና መጫን ከእርሻ-መጋዘን',en:'Load dry coffee farm to hulling'},
   {value:'transport-rent',am:'ደረቅ ቡና ማጓጓዝ ከእርሻ መኪና ኪራይ',en:'Transport vehicle rent'},
   {value:'unload-hulling',am:'ደረቅ ቡና መጋዘን ቤት ማውረድ',en:'Unload dry coffee to hulling'},
   {value:'hulling',am:'ደረቅ ቡና ማስፈጨት',en:'Hulling dry coffee'},
   {value:'loading-clean',am:'ንፁህ ቡና መጫን',en:'Loading/unloading clean coffee'},
   {value:'transport-aa',am:'ንፁህ ቡና ወደ አ.አ መላክ መኪና ኪራይ',en:'Transport clean coffee to Addis Ababa'},
   {value:'removal-drying-bed',am:'ቡና ማድረቂያ አልጋ ማፍረስ',en:'Removal of drying bed'},
  ],
 },
];

const flatByActivity: Record<string, SelectOption[]> = {
 nursery: nurserySubActivities,
 'young-coffee-care': youngCoffeeSubActivities,
 'mature-coffee-care': matureCoffeeSubActivities,
 infilling: infillingSubActivities,
};

const groupedActivities = new Set(['picking-related']);

export function hasSubActivities(activity: string){return !!flatByActivity[activity]||groupedActivities.has(activity)}

export function subActivityGroups(activity: string): SubActivityGroup[]{return activity==='picking-related'?pickingSubActivityGroups:[]}

export function subActivityOptions(activity: string): SelectOption[]{
 if(flatByActivity[activity])return flatByActivity[activity];
 return subActivityGroups(activity).flatMap(g=>g.options);
}

export function subActivityLabel(activity: string, value: string, lang: Lang){
 const s=String(value??'').trim();
 if(!s)return '';
 const hit=subActivityOptions(activity).find(o=>o.value===s);
 return hit?hit[lang]:s;
}
