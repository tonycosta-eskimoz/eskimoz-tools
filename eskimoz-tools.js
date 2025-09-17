(function() {
  alert("Eskimoz Tools chargé !"); // Optionnel : pour confirmer le chargement
  var e = document.getElementById('eskimoz-popup');
  if (e) {
    e.remove();
    return;
  }

  var d = document.createElement('div');
  d.id = 'eskimoz-popup';
  d.style.cssText = 'position:fixed;top:10px;left:10px;width:auto;height:auto;background:#fff;border:1px solid #000;padding:0;z-index:9999999;box-shadow:0 0 10px rgba(0,0,0,0.3);font-family:Inter,sans-serif;overflow:auto;max-height:90vh;';

  d.innerHTML =
    '<div style="background:#000b6d;color:white;padding:10px;font-weight:800;text-align:center;font-family:Inter,sans-serif;">Eskimoz Tools <button onclick="document.getElementById(\'eskimoz-popup\').remove();" style="float:right;background:red;color:white;border:none;padding:2px 6px;cursor:pointer;font-size:12px;">X</button></div>' +
    '<div style="display:flex;flex-direction:row;gap:20px;padding:10px;">' +
    // Colonne 1
    '<div style="width:300px;">' +
    '<div style="font-weight:600;background:#f5f7fa;padding:10px 12px;color:#0860d6;">❄️ My Eskimoz</div>' +
    '<ul style="margin:0;padding:0 10px 10px 10px;list-style:none;">' +
    '<li style="margin-bottom:6px;"><a href="https://crm.eskimoz.fr" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">CRM</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://app.spendesk.com/auth/login" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">Spendesk</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://app.paper.club/" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">PaperClub</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://app.senek.com/" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">Senek</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://ruche.eskimoz.fr/login" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">Ruche</a></li>' +
    '</ul>' +
    '<div style="font-weight:600;background:#f5f7fa;padding:10px 12px;color:#0860d6;">🔱 Eskimoz App</div>' +
    '<ul style="margin:0;padding:0 10px 10px 10px;list-style:none;">' +
    '<li style="margin-bottom:6px;"><a href="https://eskimoz.app/admin/workspaces" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">Workspaces</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://eskimoz.app/admin/resources" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">Resources</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://eskimoz.app/admin/tools/notorious" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">Notorious</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://eskimoz.app/admin/tools/scribe" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">Scribe</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://eskimoz.app/admin/tools/omnichannel" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">Omnichannel</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://eskimoz.app/admin/tools/shoppyz" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">Shoppyz</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://eskimoz.app/admin/tools/crawlr" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">Crawlr</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://eskimoz.app/admin/tools/monitoring" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">Monitoring</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://eskimoz.app/admin/tools/LLM-ranking" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">LLM Ranking</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://eskimoz.app/admin/tools/brand-protector" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">Brand Protector</a></li>' +
    '</ul>' +
    '</div>' +
    // Colonne 2
    '<div style="width:300px;">' +
    '<div style="font-weight:600;background:#f5f7fa;padding:10px 12px;color:#0860d6;">☢️ Eskimoz GPT</div>' +
    '<ul style="margin:0;padding:0 10px 10px 10px;list-style:none;">' +
    '<li style="margin-bottom:6px;"><a href="https://chatgpt.com/g/g-684b013a2ba8819190fbec2467b3a5dc-technique-assistant-seo-tech" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">[TECH] Assistant SEO Tech</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://chatgpt.com/g/g-684aff07868c8191b4a4d89d2cd9e2ad-linking-generateur-de-sujets-darticles" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">[LINK] Trouver des sujets d’articles</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://chatgpt.com/g/g-684afcd677348191b87eb9e4536d9074-technique-generateur-de-donnees-structurees" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">[TECH] Créer des données structurées</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://chatgpt.com/g/g-684afb54609c819193c2166ae4d89bbf-technique-optimisation-pour-les-llms" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">[TECH] Optimiser pour les LLMs</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://chatgpt.com/g/g-684af92bdf8081919e80b1bc6dd68ca4-semantique-creer-un-cocon-semantique" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">[SEM] Créer un cocon sémantique</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://chatgpt.com/g/g-684af6f3eb0881918f74aafbecb4142a-semantique-creer-un-brief-seo-complet" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">[SEM] Créer un brief SEO complet</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://chatgpt.com/g/g-684af120e694819191e39c3a4b92e799-semantique-analyser-intention-de-recherche" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">[SEM] Analyser une intention de recherche</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://chatgpt.com/g/g-6873a8d9a18481919ef8ead3fa7958f6-semantique-optimisation-de-page" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">[SEM] Brief optimisation</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://chatgpt.com/g/g-68776992ce9081918d19d50d4179a3a9-semantique-detecteur-redaction-ia" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">[SEM] Détecteur rédaction IA</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://claude.ai/public/artifacts/f9061d1c-85ef-4183-98a3-a8d01ee279b2" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">Benchmark / secteur KPIs GA4</a></li>' +
    '</ul>' +
    '<div style="font-weight:600;background:#f5f7fa;padding:10px 12px;color:#0860d6;">💊 Eskimoz HELP</div>' +
    '<ul style="margin:0;padding:0 10px 10px 10px;list-style:none;">' +
    '<li style="margin-bottom:6px;"><a href="https://elearning.eskimoz.fr/users/sign_in" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">Elearning Eskimoz</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://app.asana.com/1/138280645204686/project/1199968371340033/board/1205106883343646" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">Ticketing SEO Tech</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://app.asana.com/1/138280645204686/project/1200001491230065/board/1205107033695703" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">Ticketing Reporting</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://app.asana.com/1/138280645204686/project/1210580309295336/board/1210580000829922" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">Ticketing Prompt/GPT IA</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://app.asana.com/1/138280645204686/project/1209522545377230/board/1209522717549677" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">Ticketing GEO / GEA</a></li>' +
    '<li style="margin-bottom:6px;"><a href="https://app.asana.com/1/138280645204686/project/1209377307603832/board/1209409107211005" target="_blank" rel="noopener noreferrer" style="color:#0860d6;text-decoration:none;">Ticketing DATA</a></li>' +
    '</ul>' +
    '</div>' +
    '</div>';

  document.body.appendChild(d);
})();
