export type Kind = 'coffee' | 'operations';
export type Lang = 'am' | 'en';
export type SelectOption = { value: string; am: string; en: string };
export type Field = { key: string; am: string; en: string; type?: 'number' | 'date' | 'textarea'; options?: string[]; selectOptions?: SelectOption[] };
export const defaultCoffeeFieldNames = ['chetu', 'Efrata gawi', 'kammise', 'shakiso', 'telli'];
export const operationActivities: SelectOption[] = [
 {value:'nursery',am:'የችግኝ ጣቢያ ሥራዎች',en:'Nursery Operations'},
 {value:'young-coffee-care',am:'ወጣት ቡና እንክብካቤ',en:'Young Coffee Caring'},
 {value:'mature-coffee-care',am:'እናት ቡና እንክብካቤ',en:'Mature Coffee Care'},
 {value:'infilling',am:'ሞተ ከዳ ተከላ ስራዎች',en:'Infilling Operations'},
 {value:'picking-related',am:'ቡና ለቀማና ተያያዥ ስራዎች',en:'Coffee Picking & Related Activities'},
];
export const schemas: Record<Kind, Field[]> = {
 coffee: [
 {key:'date',am:'ቀን',en:'Date',type:'date'}, {key:'field',am:'የማሳ ስም',en:'Field name',options:defaultCoffeeFieldNames}, {key:'unit',am:'መለኪያ',en:'Unit'}, {key:'picked',am:'በሠራተኛ የተለቀመው',en:'Picked by workers',type:'number'}, {key:'delivered',am:'ወደ አውድማ የደረሰ',en:'Delivered to collection yard',type:'number'}, {key:'cumulative',am:'እስካሁን የተለቀመ',en:'Cumulative picked',type:'number'}, {key:'workers',am:'ቡናውን የመዘኑ ሠራተኞች',en:'Weighing staff (names / roles)'}
 ],
 operations: [
 {key:'date',am:'ቀን',en:'Date',type:'date'}, {key:'office',am:'የእርሻ ጽ/ቤቱ ስም',en:'Farm office',options:defaultCoffeeFieldNames}, {key:'subFarm',am:'ንዑስ እርሻ',en:'Sub-farm'}, {key:'activity',am:'ተግባራት',en:'Activities',selectOptions:operationActivities}, {key:'subActivity',am:'ንዑስ ተግባር',en:'Sub-activity'}, {key:'unit',am:'መለኪያ',en:'Unit'}, {key:'block',am:'ማሳ / Block',en:'Block'}, {key:'norm',am:'ተመን',en:'Norm',type:'number'}, {key:'plan',am:'ዕቅድ',en:'Plan',type:'number'}, {key:'actual',am:'ክንውን / አፈጻጸም',en:'Actual performance',type:'number'}, {key:'labor',am:'ጉልበት',en:'Labor',type:'number'}, {key:'payment',am:'ክፍያ',en:'Payment',type:'number'}, {key:'comment',am:'የዕለቱ ማጠቃለያ አስተያየት',en:'Daily summary comment',type:'textarea'}, {key:'prepared',am:'ያዘጋጀው ባለሙያ',en:'Prepared by'}, {key:'verified',am:'ያረጋገጠው የንዑስ እርሻ ኃላፊ',en:'Verified by'}, {key:'approved',am:'ያጸደቀው',en:'Approved by'}
 ]
};
export const words = {
 am: {coffee:'የዕለት ቡና መመዝገቢያ',operations:'የዕለት እርሻ ተግባራት',subtitle:'የእርሻ መዝገቦችን በቀላሉ ያስተዳድሩ',add:'አዲስ መዝገብ',search:'መዝገብ ፈልግ...',all:'ሁሉም ቀናት',export:'ወደ Excel',print:'አትም',edit:'አስተካክል',delete:'ሰርዝ',save:'አስቀምጥ',cancel:'ሰርዝ',difference:'ልዩነት',actions:'ተግባር',empty:'ምንም መዝገብ አልተገኘም',confirm:'ይህን መዝገብ ለመሰረዝ እርግጠኛ ነዎት?',records:'መዝገቦች',demo:'የሙከራ ስሪት',required:'እባክዎ ይህን መስክ ይሙሉ',fieldPlaceholder:'የማሳ ስም ይምረጡ',officePlaceholder:'የእርሻ ጽ/ቤት ይምረጡ',activityPlaceholder:'ተግባር ይምረጡ',subActivityPlaceholder:'ንዑስ ተግባር ይምረጡ'},
 en: {coffee:'Daily Coffee Collection',operations:'Daily Farm Operations',subtitle:'Manage your daily farm records with ease',add:'Add record',search:'Search records...',all:'All dates',export:'Export Excel',print:'Print',edit:'Edit',delete:'Delete',save:'Save record',cancel:'Cancel',difference:'Difference',actions:'Actions',empty:'No records found',confirm:'Delete this record?',records:'Records',demo:'Demo version',required:'Please complete this field',fieldPlaceholder:'Select field name',officePlaceholder:'Select farm office',activityPlaceholder:'Select activity',subActivityPlaceholder:'Select sub-activity'}
};
