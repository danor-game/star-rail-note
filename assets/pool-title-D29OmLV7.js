import{_ as g,c as f,J as B,a,b as o,d as i,m as l,E as m,q as y,e,F as b,u as r,D as d,p as D,n as $}from"./index-aSgyGGsL.js";import{M as p}from"./meta-Bit9qb41.js";const h=t=>(D("data-v-0bb76774"),t=t(),$(),t),k=["sub"],w={key:0},R=["src"],I={key:0,"_rarity-5":""},v={key:1,"_rarity-5":""},M={key:2,"_rarity-4":""},H={key:3,"_rarity-4":""},j={_total:""},x=h(()=>i("span",{_split:""}," 抽 ",-1)),C={"_rarity-5":""},S={_missed:""},L=h(()=>i("span",{_split:""}," 五星 ",-1)),N={key:0,"_rarity-4":""},T={key:1,_split:""},V={__name:"pool-title",props:{display:{type:String,default:"main"},analysis:{type:Object,default:null},shownCharacterRarity4:{type:Boolean,default:!1},shownLightconeRarity4:{type:Boolean,default:!1}},setup(t){const s=t,_=f(()=>s.display=="main"&&s.analysis?.pool&&s.analysis?.pool?.timeDead?s.analysis.pool.timeBorn?`${d(s.analysis.pool.timeBorn,"X").format("MM月DD月 HH时mm分")} ~ ${d(s.analysis.pool.timeDead,"X").format("MM月DD日 HH时mm分")}`:`维护后 ~ ${d(s.analysis.pool.timeDead,"X").format("MM月DD月 HH时mm分")}`:!1);return(u,X)=>{const c=B("tip");return a(),o("p-pool-title",{sub:u.brop(s.display=="sub")},[s.analysis?.pool?.itemsBoost5?.[0]?(a(),o("p-header",w,[i("img",{src:`./image/item/${s.analysis.pool.itemsBoost5?.[0]}.png`},null,8,R)])):l("",!0),i("p-name-box",null,[i("p-name",null,[m((a(),o("span",null,[y(e(s.analysis.name),1)])),[[c,_.value]]),i("sup",null,e(s.analysis.pool?.rerun?s.analysis.pool?.rerun+1:" "),1),s.analysis.pool?(a(),o(b,{key:0},[s.analysis.pool.typeItem=="character"?(a(),o("p-boost",I,"  "+e(r(p).characters$id[s.analysis.pool.itemsBoost5?.[0]]?.name),1)):l("",!0),s.analysis.pool.typeItem=="lightcone"?(a(),o("p-boost",v,"  "+e(r(p).characters$id[r(p).lightcones$id[s.analysis.pool.itemsBoost5?.[0]]?.characterBest]?.name),1)):l("",!0),s.analysis.pool.typeItem=="character"&&t.shownCharacterRarity4?m((a(),o("p-boost",M,[y("  "+e(s.analysis.pool.itemsBoost4?.map(n=>r(p).items$id[n]?.name).join(" ")),1)])),[[c,s.analysis.pool.itemsBoost4?.map(n=>r(p).items$id[n]?.name).join(" ")]]):l("",!0),s.analysis.pool.typeItem=="lightcone"&&t.shownLightconeRarity4?m((a(),o("p-boost",H,[y("  "+e(s.analysis.pool.itemsBoost4?.map(n=>r(p).items$id[n]?.name).join(" ")),1)])),[[c,s.analysis.pool.itemsBoost4?.map(n=>r(p).items$id[n]?.name).join(" ")]]):l("",!0)],64)):l("",!0)]),i("p-count",null,[i("span",j,e(s.analysis.logs.length),1),x,i("span",C,e(s.analysis.logs5.length),1),i("sup",S,e(s.analysis.logs5.filter(n=>n.missed).length),1),L,t.shownCharacterRarity4||t.shownLightconeRarity4?(a(),o("span",N,e(s.analysis.logs4.length),1)):l("",!0),t.shownCharacterRarity4||t.shownLightconeRarity4?(a(),o("span",T," 四星")):l("",!0)])])],8,k)}}},P=g(V,[["__scopeId","data-v-0bb76774"]]);export{P as default};
