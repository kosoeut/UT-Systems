const SUPABASE_URL = 'https://yjoszqcnfhqucdjfnryn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_E_ZX9d1sY7ayRieKMFWPGw_sO07v050'; // သင်၏ Key အပြည့်အစုံကို ထည့်ပါ

// နာမည်ထပ်နေတဲ့ ပြဿနာကို ဖြေရှင်းရန် အောက်ပါအတိုင်း ပြင်ရေးပါ
window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);