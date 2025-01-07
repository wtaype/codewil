function mijQuery(){window.jQuery&&window.$&&!window.done?(window.done=1,$(function(){ 
    //DIOS ES MI SALVADOR[START V20 3385357715164968503] 
    //MI COOKIES - LOCALSTORAGE 
    !function(e,t){typeof module=="object"&&module.exports?module.exports=t():e.Cookies=t()}(this,()=>({set:(e,t,n={})=>{try{n.expires&&(n.expires=+n.expires?new Date(Date.now()+864e5*n.expires):n.expires);t&&t.length>4000?(localStorage.setItem(e,t),document.cookie=`${e}_useLS=true;expires=${n.expires}`):document.cookie=e+"="+t+Object.entries(n).map(([e,t])=>t?";"+e+(t===!0?"":"="+t):"")}catch(e){}},get:e=>{try{return document.cookie.includes(e+"_useLS=true")?localStorage.getItem(e):(document.cookie.match("(^| )"+e+"=([^;]*)")||[])[2]}catch(e){return""}},remove:e=>{document.cookie=e+"=;expires=Thu, 01 Jan 1970";document.cookie=e+"_useLS=;expires=Thu, 01 Jan 1970";localStorage.removeItem(e)}}));
    function savels(key,value,hours){localStorage.setItem(key, JSON.stringify({value:value,expiry:Date.now()+hours*3600000}))};function getls(key){var item=JSON.parse(localStorage.getItem(key));if(!item||Date.now()>item.expiry){localStorage.removeItem(key);return null}return item.value};function removels(key){localStorage.removeItem(key)};
    // FUNCIONES GENIALES 
    $('.wty').text(new Date().getFullYear());
    $('.wtu').text(new Date().toLocaleString())
    function adr(a,b){$(a).addClass(b).siblings().removeClass(b)}
    function atc(x,y){$(x).addClass(y).delay(2800).queue(q=>$(x).removeClass(y).dequeue())}
    function atx(x,y,z){$(x).text(y).addClass('btha').delay(1800).queue(q=>$(x).text(z).removeClass('btha').dequeue())}
    let tmx;function atxs(tis,cls,txa,txb){$(tis).text(txa).addClass('btha');clearTimeout(tmx), tmx=setTimeout(()=>$(cls).text(txb).removeClass('btha'),800)}
    async function mcopy(tsc,clc){clearTimeout(tmx);tmx=setTimeout(async()=>{await navigator.clipboard.writeText($(tsc).val());atxs(tsc,clc,'¡COPIADO!','COPIAR')},1000)}
    // ACTUALIZANDO NAVS LINKS
    $(function(){
      $('.bhr').click(function(){
        adr(this,'bha');adr('#mhr'+$(this).data('ihr'),'hra')
      });const lx=window.location.hash; if(lx){let nx=lx.slice(-2);adr('.bh'+nx, 'bha'); adr('#mhr'+nx, 'hra')}
    });  
    // ACTUALIZANDO GENERAL #01
    function bhwa(te,dt){$(`[data-shwg="${String($(te).data(dt))}"]`).toggleClass('shwa') } 
    $('[data-shwg]').click(function(){
      const id = $(this).data('shwg');bhwa(this,'shwg');
      if($(this).hasClass('shwa')){
        $('.hr'+id).detach().appendTo('.gresult'); //TRAENDO
      }else{
        $('.hr'+id).detach().appendTo('#mhr'+id); //TRAENDO
      }
    });
    $('[data-ihr]').click(function(){
      const id = $(this).data('ihr');bhwa(this,'ihr');
      $('.hr'+id).detach().appendTo('#mhr'+id); //REGRESANDO
    });
    // GUARDANDO ANTES DE CARGAR
    $(window).on('beforeunload',function(){
      let hrs = $('.gresult>div').map((_,me)=>me.className).get();
      savels('shw_general',hrs,180);
    }); 
    $(getls('shw_general')||['hr02','hr03','hr04']).each(function(){
      $('.'+this).detach().appendTo('.gresult');
      $(`[data-shwg="${this.slice(-2)}"]`).addClass('shwa');
    })
    
    // GUARDANDO DATOS LOCALSTORAGE
    function gsave() {   
      // PARA TIEMPO DEL TEXTO: (tx=texto)(tm=tiempo)(el=elemento)(elc=ele contenedor)(id=id)(nt=notificacion)
      const ntf=(el,tx1,tx2,atc,tm=1500)=>el && $(el).closest('[data-hid]').find(atc).each((_,nt)=>$(nt).text(tx1).addClass('btha').delay(tm).queue(q=>$(nt).text(tx2).removeClass('btha').dequeue()));
      const get=el=>{const $el=$(el),$elc=$el.closest('[data-hid]');return {$el,$elc,id:$elc.data('hid')}}  
      // PARA OBTENER VALORES LOCALSTORAGE:(ls=localStorage)(vl=valor)
      $('.txen').each((_,el)=>{const {$el,id}=get(el),vl=getls($el.data('hnv'));vl && ($el.is('textarea')? $el.val(vl):$el.html($el.is('.pdim')? `<img src="${vl}">`:vl))});  
      // PARA GUARDAR ELIMINAR COPIAR LOCALSTORAGE: (ac=accion)(vl=valor)(cp=copiar)
      return {
        save: (el,tx1,tx2,ac,tm)=>{const {$elc,id}=get(el);savels(`hn${id}`,$elc.find('.txen').val(),180);ntf(el,tx1,tx2,ac,tm)},
        sdel: (el,tx1,tx2,ac,tm)=>{const {$elc,id}=get(el); removels(`hn${id}`,'');$elc.find('.txen').val('');ntf(el,tx1,tx2,ac,tm)},
        mcopy:(el,tx1,tx2,ac,tm)=>{const{$el,$elc}=get(el);if($el.data('copying'))return;clearTimeout($el.data('tping'));const cp=$elc.find('.txen').val();$el.data('tping',setTimeout(async()=>{if(!cp?.match(/^\s*$/))try{$el.data('copying',!0);await navigator.clipboard.writeText(cp);ntf(el,tx1,tx2,ac,tm)}catch(e){}finally{$el.data('copying',!1)}},500))},
    }}
    // PARA ACTUALIZAR FUNCIONES 
    const sb = gsave();
    $('.bsv').click(function() { sb.save(this, 'GUARDANDO', 'GUARDADO', '.bsv', 100); });
    $('.bco').click(function() { sb.mcopy(this, 'COPIADO', 'COPIAR', '.bco', 400); });
    $('.bdl').click(function() { sb.sdel(this, 'ELIMINANDO', 'ELIMINADO', '.bdl', 100); });
    $('.txen').on('input', function() { 
      sb.save(this, 'GUARDANDO', 'GUARDADO', '.bsv', 1500);
      sb.mcopy(this, 'COPIADO', 'COPIAR', '.bco', 2000);
    });
    
    
    //    ESTO SERA PARA GUARDAR EN LOCAL ENTRADA:
    //  ESTO SERA PARA GUARDAR EN LOCAL, Necesitamos que la entrada .txen se guarde NUBE, luego se traiga se guarde encima en el mismo .txen. Tambien aparezca mensaje "Completado"
    // Necesitamos que el copy en automatico, despues aparezca el mensaje de arriba copiado: 
       // console.log(`ID: ${$(this).attr('id')} CLASS: ${$(this).attr('class')}  HTML: ${$(this).html()} TEXTO: ${$(this).attr('class')}`)
    
      
    // $(function(){
    // let lhnv=null;function gosv(td){savels(td.data('hnv'),td.is('textarea')?td.val(): td.is('.pdim')? td.find('img').attr('src') :td.html(),180);atxs('.bsv','GUARDANDO','GUARDADO')}
    // $('[data-hnv]').on('input paste',function(){lhnv=$(this);gosv($(this))}); // GUARDAR POR 1 SEMANA (180 HORAS) 
    //  //BOTONES SAVE - DELETE - COPY  
    // function mcpy(){
    //     const $e = $('.mhr.hra .txe'), $v = $e.is('textarea') ? 'val' : 'text';
    //     navigator.clipboard.writeText($e.last()[$v]()); atx('.bco', 'COPIADO', 'COPIAR');
    // };
    // $('[data-csd]').on('click', function() {
    //     const $t = $(this), $e = $('.mhr.hra .txe'), $v = $e.is('textarea') ? 'val' : 'text';
    //     $t.is('.bdl') ? (removels($e.data('hnv')), $e[$v](''), atx('.bdl', 'ELIMINANDO', 'ELIMINADO')) : 
    //     $t.is('.bco') ? mcpy() : lhnv && gosv(lhnv);
    // });$('.sct button').on('dblclick', mcpy);
      
    // //OBTENER VALORES 
    // $('.txen').each(function(){const $t=$(this),mls=getls($t.data('hnv'));if(mls)$t.is('textarea')?$t.val(mls):$t.is('.pdim')?$t.html(`<img src="${mls}">`) :$t.html(mls)});
    // });
    
    //ENTITIES #02
    $(function(){
      const mls={
        0: {'&':'&amp;','<':'&lt;'},
        1: {'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'"}
      }; 
      const mfc = mdf => $('#rs02').val(Object.entries(mls[mdf]).reduce((t,[a,b])=> t.replace(new RegExp(a.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&'),'g'), b), $('#ki02').val()
      ));mfc(1);    
      $('#bnor').click(()=>mfc(1));
      $('#bent').click(()=>mfc(0));
      $('#ki02').on('input',()=>mfc(1));
    });
    //PRETTIER #03
    $(function(){
        const prettify = {
            html: html => html
                .replace(/<(pre|textarea|script|style)[^>]*>[\s\S]*?<\/\1>/gi, m => m.replace(/\n/g, '&#10226;'))
                .replace(/></g, '>\n<')
                .split('\n')
                .map((line, _, lines) => {
                    line = line.trim();
                    if (!line) return '';
                    const nivel = lines.slice(0, _).filter(l => 
                        l.trim().startsWith('<') && !l.trim().startsWith('</') && 
                        !l.trim().endsWith('/>') && !l.trim().endsWith('>')).length;
                    return ' '.repeat(line.startsWith('</') ? Math.max(0, nivel - 1) : nivel) + line;
                })
                .filter(Boolean)
                .join('\n')
                .replace(/&#10226;/g, '\n')
                .trim(),
            css: css => css
                .replace(/;\s*/g, ';\n ') 
                .replace(/\s*{\s*/g, '{\n ') 
                .replace(/\s*}\s*/g, '\n}\n')
                .replace(/:\s*/g, ':')
                .replace(/\n\s*\n/g, '\n')
                .trim(),
    
            js: js => js
                .replace(/([^;{}\n])\s*(}|\n|$)/g, '$1;$2')
                .replace(/(["'`])(?:(?=(\\?))\2.)*?\1/g, m => m.replace(/\n/g, '&#10226;'))
                .replace(/\s*{\s*/g, '{\n')
                .replace(/\s*}\s*/g, '\n}\n')
                .replace(/;\s*/g, ';\n')
                .split('\n')
                .map(line => {
                    line = line.trim();
                    if (!line) return '';
                    const nivel = line === '}' ? 0 : 1;
                    return ' '.repeat(nivel) + line;
                })
                .filter(Boolean)
                .join('\n')
                .replace(/&#10226;/g, '\n')
                .replace(/\n\s*\n/g, '\n')
                .trim()
        };   
        $('#phtml').click(() => $('#rs03').val(prettify.html($('#ki03').val())));
        $('#pcss').click(() => $('#rs03').val(prettify.css($('#ki03').val())));
        $('#pjs').click(() => $('#rs03').val(prettify.js($('#ki03').val())));
        
    });
    //MINIFIER #04
    $(function(){
       const m={
            h:h=>h.replace(/<!--[\s\S]*?-->/g,'')
                .replace(/<(pre|textarea|script|style)[^>]*>[\s\S]*?<\/\1>/gi,m=>m.replace(/\s/g,'&#8962;'))
                .replace(/\s+/g,' ')
                .replace(/>\s+</g,'><')
                .replace(/\s*(<[^>]*>)\s*/g,'$1')
                .replace(/\s+$/gm,'')
                .replace(/^\s+/gm,'')
                .replace(/&#8962;/g,' ')
                .trim(),
            c:c=>c.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,'')
                .replace(/[\n\r\t\s]+/g,' ')
                .replace(/\s*{\s*/g,'{')
                .replace(/\s*}\s*/g,'}')
                .replace(/\s*:\s*/g,':')
                .replace(/\s*;\s*/g,';')
                .replace(/\s*,\s*/g,',')
                .trim(),
            j:j=>j.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,'')
                .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g,m=>m.replace(/\s/g,'&#8962;'))
                .replace(/\s*([-+*/%=<>!&|,{}():;])\s*/g,'$1')
                .replace(/[\n\r\t\s]+/g,' ')
                .replace(/\s+/g,' ')
                .replace(/&#8962;/g,' ')
                .trim()
        };
        $(()=>{
            $('#mhtml').click(()=>$('#rs04').val(m.h($('#ki04').val())));
            $('#mcss').click(()=>$('#rs04').val(m.c($('#ki04').val())));
            $('#mjs').click(()=>$('#rs04').val(m.j($('#ki04').val())));
        });
    });
    //CONTADOR #05
    $(function(){
        function contador(){
            const ts=$('#ki05').val();
            $('#cdpl').text(ts.trim()?ts.trim().split(/\s+/).length:0);
            $('#cdcs').text(ts.replace(/\s/g,'').length);
            $('#cdcc').text(ts.length);
            $('#cdpr').text(ts.trim()?ts.split(/\n\s*\n/).filter(p=>p.trim()).length:0);
            $('#cdln').text(ts.trim()?ts.split('\n').length:0);
        }contador(); $('#ki05').on('input',contador);
    }); 
    //COLORES #06
    $(function(){
    function colorpd(){
      $('#rs06').html(
          $('#ki06').val().match(/--([\w-]+):\s*(#[A-Fa-f0-9]+);?/g)?.map(m => {
              const [name, value] = m.match(/--([\w-]+)|#[A-Fa-f0-9]+/g);
              return `<div class="cols">
                  <span class="conm">${name}</span>
                  <span class="covl">${value}</span>
                  <div class="cobg" style="background-color:${value}"></div>
              </div>`;
          }).join('') || '')
     }colorpd();
    
    $('#ki06').on('input', colorpd);
    });
    //MAYUSCULAS #07
    $(function(){
    const transforms = {
       upper: t => t.toUpperCase(),
       lower: t => t.toLowerCase(), 
       capital: t => t.toLowerCase().replace(/(^|\s)\w/g, c => c.toUpperCase()),
       sentence: t => t.toLowerCase().replace(/(^|[.!?]\s+)\w/g, c => c.toUpperCase())
    };
       const $out = $('#rs07'), $in = $('#ki07');
       const transform = type => $out.val(transforms[type]($in.val()));
       
       $('#may').click(() => transform('upper'));
       $('#min').click(() => transform('lower')); 
       $('#mai').click(() => transform('capital'));
       $('#mdp').click(() => transform('sentence'));
    
       $in.on('input', () => transform('upper'));transform('upper');
    });
    //CALCULOMES #08
    $(function(){
        var hoy = new Date();
        $("#fechahoy").val(hoy.toLocaleDateString('es-ES'));
        function mtiempo(){
            var [d, m, y] = $("#fecha0").val().split('/'),
                inicio = new Date(y, m - 1, d),
                meses = (hoy.getFullYear() - inicio.getFullYear()) * 12 + hoy.getMonth() - inicio.getMonth() + 1,
                dias = hoy.getDate() - inicio.getDate();
            if (dias < 0) meses--, dias += new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
            $("#mtiempo").text(`${meses} meses y ${dias} días`); 
        }
        $("#fecha0").on('input', mtiempo);
        mtiempo();
    });
    //IMAGENES #09
    $(function(){
    $('#ki09').on('paste', function(e){
      const item = [...(e.clipboardData || e.originalEvent.clipboardData).items].find(item => item.type.startsWith('image'));
      if(item){
          const $mim = new FileReader();
          $mim.onload = function(evt){
              $('#ki09').html(`<img src="${evt.target.result}">`);
          }; $mim.readAsDataURL(item.getAsFile());
      }
    });
    $('.dcv').on('input change',function(){
      var $ts = $(this).val();
      $('.dci').css('background',$ts);
      $('.dcv').val($ts);
    });
    });
    // PAINTER #10
    $(function(){
        const $canvas = $('#canvas'), canvas = $canvas[0], ctx = canvas.getContext('2d');
        const $textInput = $('#textInput');
        const createCanvasContext = () => {
            const c = document.createElement('canvas');
            c.width = canvas.width;
            c.height = canvas.height;
            return c.getContext('2d');
        };
        const mainCtx = createCanvasContext(), previewCtx = createCanvasContext(), selectionCtx = createCanvasContext();
        const state = {
            isDrawing: false,
            tool: 'brush',
            color: '#1976d2',
            brushSize: 4,
            textSize: 20,
            fontFamily: 'Poppins',
            undoStack: [],
            selection: null,
            isTransforming: false,
            isAddingText: false
        };// Estado de la aplicación
        const shortcuts = {
            b: 'brush',
            a: 'selection',
            r: 'rectangle',
            s: 'semi-rectangle',
            u: 'semi-round',
            c: 'circle',
            t: 'text'
        };// Atajos de teclado
        const getMousePos = e => {
            const rect = canvas.getBoundingClientRect();
            return { x: e.clientX - rect.left, y: e.clientY - rect.top };
        };// Funciones de utilidad
        const saveState = () => state.undoStack.push(mainCtx.canvas.toDataURL());
        const updateCanvas = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(mainCtx.canvas, 0, 0);
            if (state.selection) ctx.drawImage(selectionCtx.canvas, 0, 0);
            ctx.drawImage(previewCtx.canvas, 0, 0);
        };
        const configureContext = context => {
            context.strokeStyle = state.color;
            context.fillStyle = state.color;
            context.lineWidth = state.brushSize;
            context.lineCap = 'round';
            context.lineJoin = 'round';
        };    
        const initializeCanvas = () => {
            const savedCanvasData = getls('savedCanvas');
            if (savedCanvasData) {
                const img = new Image();
                img.onload = () => {
                    mainCtx.drawImage(img, 0, 0);
                    saveState();
                    updateCanvas();
                };
                img.src = savedCanvasData;
            } else {
                mainCtx.fillStyle = '#FFFFFF';
                mainCtx.fillRect(0, 0, canvas.width, canvas.height);
                saveState();
                updateCanvas();
            }
        }; // Fondo blanco #fffff o localStorage
        const handleUndo = () => {
            if (state.undoStack.length > 1) {
                state.undoStack.pop();
                const img = new Image();
                img.onload = () => {
                    mainCtx.clearRect(0, 0, canvas.width, canvas.height);
                    mainCtx.drawImage(img, 0, 0);
                    updateCanvas();
                }; img.src = state.undoStack[state.undoStack.length - 1];
            }
        };
        const handleClear = () => {
            if (confirm('&#191;Estás seguro de que quieres limpiar el canvas?')) {
                mainCtx.clearRect(0, 0, canvas.width, canvas.height);
                mainCtx.fillStyle = '#FFFFFF';
                mainCtx.fillRect(0, 0, canvas.width, canvas.height);
                state.undoStack = [];
                saveState();
                updateCanvas();
                removels('savedCanvas');
              atx('#clearBtn','Limpiado','Limpiar'); 
            }
        };
        const handleSave = () => {
            const canvasData = mainCtx.canvas.toDataURL('image/png');
            savels('savedCanvas', canvasData, 24); 
            alert('El dibujo ha sido guardado y almacenado localmente.'); atx('#saveBtn','Guardado','Guardar'); 
        };
        const handleDownload = () => {
            const link = document.createElement('a');
            link.download = 'painter-drawing.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        };
        const handleCopy = () => {
            canvas.toBlob(blob => {
                const item = new ClipboardItem({ 'image/png': blob });
                navigator.clipboard.write([item]);
            }); atx('#copyBtn','Copiado','Copiar'); 
        };
        const startDrawing = e => {
            if (state.isAddingText) return finalizeText();
            const pos = getMousePos(e);
            state.startX = pos.x;
            state.startY = pos.y;
            if (state.tool === 'selection' && !state.isTransforming) {
                state.isDrawing = true;
                selectionCtx.clearRect(0, 0, canvas.width, canvas.height);
                state.selection = null;
            } else if (state.tool === 'text' && !state.isTransforming) {
                handleTextTool(pos.x, pos.y);
            } else if (!state.isTransforming) {
                state.isDrawing = true;
                if (state.tool === 'brush') {
                    mainCtx.beginPath();
                    mainCtx.moveTo(pos.x, pos.y);
                    configureContext(mainCtx);
                }
            }
        };
        const draw = e => {
            if (!state.isDrawing || state.isTransforming || state.isAddingText) return;
            const pos = getMousePos(e);
            if (state.tool === 'selection') {
                drawSelectionRect(pos);
            } else {
                const actions = {
                    brush: () => {
                        mainCtx.lineTo(pos.x, pos.y);
                        mainCtx.stroke();
                    },
                    rectangle: () => drawShape(pos, false),
                    'semi-rectangle': () => drawShape(pos, true),
                    'semi-round': () => drawRoundedRectangle(pos),
                    circle: () => drawCircle(pos)
                };
                actions[state.tool]?.();
            }
            updateCanvas();
        };
        const stopDrawing = () => {
            if (!state.isDrawing || state.isTransforming || state.isAddingText) return;
            if (state.tool !== 'brush' && state.tool !== 'text') {
                mainCtx.drawImage(previewCtx.canvas, 0, 0);
                previewCtx.clearRect(0, 0, canvas.width, canvas.height);
            }
            state.isDrawing = false;
            saveState();
            updateCanvas();
        };
        const drawSelectionRect = pos => {
            selectionCtx.clearRect(0, 0, canvas.width, canvas.height);
            selectionCtx.setLineDash([6]);
            selectionCtx.strokeStyle = 'blue';
            selectionCtx.lineWidth = 1;
            const width = pos.x - state.startX;
            const height = pos.y - state.startY;
            selectionCtx.strokeRect(state.startX, state.startY, width, height);
            state.selection = { x: state.startX, y: state.startY, width, height };
        };
        const drawShape = (pos, semi) => {
            previewCtx.clearRect(0, 0, canvas.width, canvas.height);
            configureContext(previewCtx);
            const width = pos.x - state.startX;
            const height = pos.y - state.startY;
            if (semi) {
                previewCtx.fillStyle = `${state.color}80`;
                previewCtx.fillRect(state.startX, state.startY, width, height);
            }
            previewCtx.strokeRect(state.startX, state.startY, width, height);
        };
        const drawRoundedRectangle = pos => {
            previewCtx.clearRect(0, 0, canvas.width, canvas.height);
            configureContext(previewCtx);
            const width = pos.x - state.startX;
            const height = pos.y - state.startY;
            previewCtx.beginPath();
            if (previewCtx.roundRect) {
                previewCtx.roundRect(state.startX, state.startY, width, height, 5);
            } else {
                previewCtx.rect(state.startX, state.startY, width, height);
            }
            previewCtx.fillStyle = `${state.color}80`;
            previewCtx.fill();
            previewCtx.stroke();
        };
        const drawCircle = pos => {
            previewCtx.clearRect(0, 0, canvas.width, canvas.height);
            configureContext(previewCtx);
            const radius = Math.hypot(pos.x - state.startX, pos.y - state.startY);
            previewCtx.beginPath();
            previewCtx.arc(state.startX, state.startY, radius, 0, Math.PI * 2);
            previewCtx.stroke();
        };
        const handleTextTool = (x, y) => {
            state.isAddingText = true;
            $textInput.css({display:'block',left:x,top:y,color:state.color,'font-size':`${state.textSize}px`,'font-family':state.fontFamily,position:'absolute',border:'1px dashed #000',padding:'5px',background:'transparent',outline:'none','white-space':'pre-wrap','word-wrap':'break-word','overflow-wrap':'break-word'}).focus().text('');
            let isDragging = false, offset = { x: 0, y: 0 };
            $textInput.on('mousedown', e => {
                isDragging = true;
                offset.x = e.pageX - $textInput.position().left;
                offset.y = e.pageY - $textInput.position().top;
                e.stopPropagation();
            });
            $(document).on('mousemove.textInput', e => {
                if (isDragging) {
                    $textInput.css({ left: e.pageX - offset.x, top: e.pageY - offset.y });
                }
            }).on('mouseup.textInput', () => isDragging = false);
        };
        const finalizeText = () => {
            if (!state.isAddingText) return;
            const text = $textInput.text().trim();
            if (text) {
                const position = $textInput.position();
                mainCtx.font = `${state.textSize}px ${state.fontFamily}`;
                mainCtx.fillStyle = state.color;
                mainCtx.textBaseline = 'top';
                const maxWidth = $textInput.width();
                const lineHeight = state.textSize * 1.2;
                const lines = text.split('\n');
                let y = position.top;
                lines.forEach(lineText => {
                    const words = lineText.split(' ');
                    let line = '';
                    words.forEach(word => {
                        const testLine = `${line}${word} `;
                        if (mainCtx.measureText(testLine).width > maxWidth && line) {
                            mainCtx.fillText(line, position.left, y);
                            line = `${word} `;
                            y += lineHeight;
                        } else {
                            line = testLine;
                        }
                    });
                    mainCtx.fillText(line, position.left, y);
                    y += lineHeight;
                });
                saveState();
                updateCanvas();
            }
            $textInput.hide().off('mousedown').css({ width: '', height: '' });
            $(document).off('.textInput');
            state.isAddingText = false;
        }; 
        const handleMove = () => {
            if (!state.selection) return;
            const { x, y, width, height } = state.selection;
            const imageData = mainCtx.getImageData(x, y, width, height);
            state.isTransforming = true;
            let offsetX = 0, offsetY = 0;
            const onMouseMove = e => {
                const pos = getMousePos(e);
                offsetX = pos.x - state.startX;
                offsetY = pos.y - state.startY;
                previewCtx.clearRect(0, 0, canvas.width, canvas.height);
                previewCtx.putImageData(imageData, x + offsetX, y + offsetY);
                updateCanvas();
            };
            const onMouseUp = () => {
                mainCtx.clearRect(x, y, width, height);
                mainCtx.putImageData(imageData, x + offsetX, y + offsetY);
                $canvas.off('mousemove', onMouseMove).off('mouseup', onMouseUp);
                previewCtx.clearRect(0, 0, canvas.width, canvas.height);
                state.isTransforming = false;
                state.selection = null;
                saveState();
                updateCanvas();
            };
            $canvas.on('mousemove', onMouseMove).on('mouseup', onMouseUp);
        };
        const handleDuplicate = () => {
            if (!state.selection) return;
            const { x, y, width, height } = state.selection;
            const imageData = mainCtx.getImageData(x, y, width, height);
            let destX = x + width + 20, destY = y;
            if (destX + width > canvas.width) {
                destX = x;
                destY = y + height + 20;
                if (destY + height > canvas.height) {
                    destX = x - width - 20;
                    destY = y;
                    if (destX < 0) {
                        destX = x;
                        destY = y - height - 20;
                        if (destY < 0) {
                            destX = x;
                            destY = y + 20;
                        }
                    }
                }
            }
            mainCtx.putImageData(imageData, destX, destY);
            saveState();
            updateCanvas();
        };
        const deselect = () => {
            state.selection = null;
            selectionCtx.clearRect(0, 0, canvas.width, canvas.height);
            updateCanvas();
        };
        const initEvents = () => {
            $canvas.on({
                mousedown: startDrawing,
                mousemove: draw,
                mouseup: stopDrawing,
                mouseout: stopDrawing
            });// Inicialización de eventos
            $('.tool-btn').on('click', function () {
                if (state.isAddingText) finalizeText();
                $('.tool-btn').removeClass('active');
                $(this).addClass('active');
                state.tool = $(this).data('tool');
                state.isDrawing = state.isTransforming = false;
                deselect();
            }); 
            $('#brushSize').on('input', e => state.brushSize = parseInt(e.target.value));
            $('#textSize').on('input', e => {
                state.textSize = parseInt(e.target.value);
                $textInput.css('font-size', `${state.textSize}px`);
            });
            $('#colorPicker').on('input', e => {
                state.color = e.target.value;
                $textInput.css('color', state.color);
            });
            $('#fontFamily').on('change', e => {
                state.fontFamily = e.target.value;
                $textInput.css('font-family', state.fontFamily);
            });
            $('#undoBtn').on('click', handleUndo);
            $('#clearBtn').on('click', handleClear);
            $('#saveBtn').on('click', handleSave);
            $('#downloadBtn').on('click', handleDownload);
            $('#copyBtn').on('click', handleCopy);
            $(document).on('keydown', async e => {
                if ($('.hr10').hasClass('hra')) {
                    if (/INPUT|SELECT|TEXTAREA/.test(e.target.tagName) || e.target.isContentEditable) return;
                    const key = e.key.toLowerCase();
                    if (e.ctrlKey && e.shiftKey && key === 's') {
                        e.preventDefault();
                        handleDownload();
                    } else if (e.ctrlKey && key === 's') {
                        e.preventDefault();
                        handleSave();
                    } else if (e.ctrlKey && key === 'm') {
                        e.preventDefault();
                        $('.tool-btn[data-tool="selection"]').click();
                    } else if (e.ctrlKey && key === 'd') {
                        e.preventDefault();
                        deselect();
                    } else if (!e.ctrlKey && key === 'm') {
                        e.preventDefault();
                        handleMove();
                    } else if (!e.ctrlKey && key === 'd') {
                        e.preventDefault();
                        handleDuplicate();
                    } else if (e.ctrlKey && key === 'z') {
                        e.preventDefault();
                        handleUndo();
                    } else if (e.ctrlKey && key === 'c') {
                        e.preventDefault();
                        handleCopy();
                    } else if (e.ctrlKey && key === 'v') {
                        e.preventDefault();
                        await handleClipboardPaste();
                    } else if (shortcuts[key]) {
                        $(`.tool-btn[data-tool="${shortcuts[key]}"]`).click();
                    }
                }
            });
            $textInput.on('keydown', e => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    finalizeText();
                }
            });// Eventos de texto
            $(document).on('mousedown', e => {
                if (state.isAddingText && !$(e.target).closest('#textInput').length && state.tool !== 'text') {
                    finalizeText();
                }
            });
        };
        const handleClipboardPaste = async () => {
          try {
              const [clipboardItem] = await navigator.clipboard.read();
              const imageType = clipboardItem?.types.find(type => type.startsWith('image/'));
              if (!imageType) { return alert('Oh no, No hay imagenes'); }
              const blob = await clipboardItem.getType(imageType);
              const img = new Image();
              img.onload = () => {
                  const x = (canvas.width - img.width) / 2;
                  const y = (canvas.height - img.height) / 2;
                  mainCtx.drawImage(img, x, y);
                  saveState();
                  updateCanvas();
                  URL.revokeObjectURL(img.src);  
              };  img.src = URL.createObjectURL(blob);
          } catch (error) {
              console.error('Error con portapapeles:', error);
              alert('Permitir opcion pegar desde portapapeles.');
        }};
        $('.cvpi, .cvtx, .cvcp').on('click', e => {
            const value = $(e.target).data('cvin');
            if ($(e.target).hasClass('cvpi')) {
                state.brushSize = parseInt(value);
                $('#brushSize').val(value);
            } else if ($(e.target).hasClass('cvtx')) {
                state.textSize = parseInt(value);
                $('#textSize').val(value);
            } else if ($(e.target).hasClass('cvcp')) {
                state.color = value;
                $('#colorPicker').val(value);
            }
        });
        // Inicialización de la aplicación
        initializeCanvas(); initEvents();
    });
    //PANTALLA #11
    $(function(){
      function calcPantalla(){
        $('.wdv').text($(window).width() + 'px');
        $('.wdh').text($(window).height() + 'px');
        $('.wdm').text(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent) ? 'Sí' : 'No');
        $('.wdo').text($(window).width() > $(window).height() ? 'landscape-primary' : 'portrait-primary');
      }calcPantalla(); $(window).on('resize orientationchange',calcPantalla); $('.up011').click(()=>location.reload());  
    });
    
    //ACERCAPC #20
    $(function(){
        let batteryManager = null;
        function obtenerInformacion(){
            const ua = navigator.userAgent;
            const isMobile = /Mobi|Android/i.test(ua);
            function detectarSistemaOperativo(){
                let sistema = "Desconocido";
                if (/Windows NT 10/.test(ua)) sistema = "Windows 10/11";
                else if (/Windows NT 6.3/.test(ua)) sistema = "Windows 8.1";
                else if (/Windows NT 6.2/.test(ua)) sistema = "Windows 8";
                else if (/Windows NT 6.1/.test(ua)) sistema = "Windows 7";
                else if (/Android/.test(ua)) sistema = "Android";
                else if (/iPhone|iPad|iPod/.test(ua)) sistema = "iOS";
                else if (/Mac OS X/.test(ua)) sistema = "macOS";
                else if (/Linux/.test(ua)) sistema = "Linux";
                return sistema;
            }function detectarArquitectura(){
                let arquitectura = "Desconocida";
                if (/x86_64|Win64|WOW64|AMD64/.test(ua)){
                    arquitectura = "64 bits";
                } else if (/i386|i686|x86/.test(ua)){
                    arquitectura = "32 bits";
                } else if (/arm|arm64/.test(ua)){
                    arquitectura = "ARM";
                }return arquitectura;
            }function detectarNavegador(){
                let navegador = "Desconocido";
                let tem;
                if ((tem = ua.match(/Opera|OPR\/([\d.]+)/))){
                    navegador = "Opera";
                } else if ((tem = ua.match(/Edg\/([\d.]+)/))){
                    navegador = "Microsoft Edge";
                } else if ((tem = ua.match(/Chrome\/([\d.]+)/))){
                    navegador = "Google Chrome";
                } else if ((tem = ua.match(/Safari\/([\d.]+)/))){
                    navegador = "Safari";
                } else if ((tem = ua.match(/Firefox\/([\d.]+)/))){
                    navegador = "Mozilla Firefox";
                } else if ((tem = ua.match(/MSIE\s([\d.]+)/)) || /Trident/.test(ua)){
                    navegador = "Internet Explorer";
                }return navegador;
            }function obtenerConexion(){
                const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                if (connection){
                    return {
                        tipo: connection.effectiveType || "No disponible",
                        velocidad: connection.downlink ? connection.downlink + " Mb/s" : "No disponible",
                        latencia: connection.rtt ? connection.rtt + " ms" : "No disponible"
                    };
                }else {
                    return {
                        tipo: "No disponible",
                        velocidad: "No disponible",
                        latencia: "No disponible"
                    };}
            }
            const info = {
                "VIEWPORT": [
                    ["Ancho", $(document).width() + " px"],
                    ["Altura", $(document).height() + " px"],
                    ["Es Móvil", isMobile ? "Sí" : "No"],
                    ["Orientación", (screen.orientation || {}).type || "No disponible"]
                ],
                "VENTANA": [
                    ["Ancho interior", $(window).width() + " px"],
                    ["Altura interior", $(window).height() + " px"],
                    ["Ancho exterior", window.outerWidth + " px"],
                    ["Altura exterior", window.outerHeight + " px"],
                    ["Posición X", window.screenX + " px"],
                    ["Posición Y", window.screenY + " px"]
                ],
                "PANTALLA": [
                    ["Ancho total", screen.width + " px"],
                    ["Altura total", screen.height + " px"],
                    ["Ancho disponible", screen.availWidth + " px"],
                    ["Altura disponible", screen.availHeight + " px"],
                    ["Profundidad de color", screen.colorDepth + " bits"],
                    ["Profundidad de píxeles", screen.pixelDepth + " bits"],                
                ],
                "NAVEGADOR": [
                    ["Navegador", detectarNavegador()],
                    ["Estado", navigator.onLine ? "Online" : "Desconectado"],
                    ["Tipo de conexión", obtenerConexion().tipo.toUpperCase()],
                    ["Velocidad", obtenerConexion().velocidad],
                    ["Latencia", obtenerConexion().latencia],
                    ["Ratio de píxeles", window.devicePixelRatio + "x"],
                    ["Cookies Habilitadas", navigator.cookieEnabled ? "Sí" : "No"],
                    ["Soporte JavaScript", "Sí"],
                    ["Soporte WebGL", !!window.WebGLRenderingContext ? "Sí" : "No"],
                    ["Soporte Java", navigator.javaEnabled() ? "Sí" : "No"],
                    ["Do Not Track", navigator.doNotTrack === "1" ? "Sí" : "No"]
                ],
                "SISTEMA": [
                    ["Sistema Operativo", detectarSistemaOperativo()],
                    ["Tipo de sistema", detectarArquitectura()],
                    ["Procesadores (Núcleos)", navigator.hardwareConcurrency || "No disponible"],
                    ["Memoria RAM", navigator.deviceMemory ? navigator.deviceMemory + " GB" : "No disponible"],
                    ["Idioma", navigator.language],
                    ["Zona Horaria", Intl.DateTimeFormat().resolvedOptions().timeZone],
                    ["Teclado", navigator.keyboard ? "Disponible" : "No disponible"],
                    ["Gamepads", navigator.getGamepads ? "Disponible" : "No disponible"],
                    ["Realidad Virtual", navigator.xr ? "Disponible" : "No disponible"]
                ]
            };obtenerBateria().then(function(bateria){
                info["SISTEMA"].push(["Estado de batería", bateria.estado]);
                info["SISTEMA"].push(["Nivel de batería", bateria.nivel]);
                renderizarInformacion(info);
            });
        }
        function obtenerBateria(){
            if ('getBattery' in navigator){
                return navigator.getBattery().then(function(battery){
                    if (!batteryManager){
                        batteryManager = battery;
                        $(batteryManager).on('chargingchange levelchange', obtenerInformacion);
                    }
                    return {
                        estado: battery.charging ? "Cargando." : "Desenchufado",
                        nivel: (battery.level * 100).toFixed(0) + " %"
                    };
                });
            } else {
                return $.Deferred().resolve({
                    estado: "Información no disponible",
                    nivel: "Información no disponible"
                }).promise();
            }
        }
        // Renderizamos la información
        function renderizarInformacion(data) {
            let html = $.map(data, (items, seccion) => `
                <table>
                    <tr><th class="tbh" colspan="2">${seccion}</th></tr>
                    ${items.map(item => `<tr><th class="ttd">${item[0]}</th><td class="vtd">${item[1]}</td></tr>`).join('')}
                </table>
            `).join('');
    
            $('.ct20').html(html);
    }
        $('.up20').on('click', function() {
            obtenerInformacion(); 
            $(this).attr('title', "Actualizado: " + new Date().toLocaleString());
        });
        $(window).on('resize orientationchange online offline', obtenerInformacion);
        obtenerInformacion();
    });
     
      
    
    // SUBIENDO GOOGLE FONTS MORE
    const wicon = '<script src="https://cdn.jsdelivr.net/gh/wtaype/wicon@f42dc5f/wicon.min.js"><\/script>';
    const mstyles = '<style>@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&family=Space+Grotesk:wght@300..700&display=swap");</style>';
    $('head').append(`${wicon}${mstyles} `);
    //DIOS ES MI SALVADOR[END] 
    })):setTimeout(mijQuery,50)}let lQt=7000,lQv=0,lQz=!localStorage.getItem('wquery');lQz?(["scroll","mousemove"].forEach(e=>addEventListener(e,ldjQuery)),setTimeout(ldjQuery,lQt)):ldjQuery();function ldjQuery(){if(!lQv){lQv=1;lQz&&["scroll","mousemove"].forEach(e=>removeEventListener(e,ldjQuery));let s=document.createElement("script");s.src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js";s.onload=()=>{localStorage.setItem("wquery","wi");mijQuery()};document.head.appendChild(s)}}
    //THEMES WEB
    const sth=e=>{const[t,c]=e.dataset.tema.split('|');document.documentElement.dataset.theme=t,(document.querySelector('meta[name="theme-color"]')||Object.assign(document.head.appendChild(document.createElement('meta')),{name:'theme-color'})).content=c,localStorage.mtheme=e.dataset.tema,document.querySelector('.mtha')?.classList.remove('mtha'),e.classList.add('mtha')};sth(document.querySelector(`[data-tema="${localStorage.mtheme}"]`)||document.querySelector('.mtha'));document.querySelectorAll('[data-tema]').forEach(e=>e.onclick=()=>sth(e));
    
    
    
    
     
    