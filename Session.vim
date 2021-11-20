let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Data/WS/creekcottage
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +1 components/indexText.js
badd +17 components/indexSidePanel.js
badd +18 components/myMenu.js
badd +4 components/cottageText.js
badd +18 components/cottageSidePanel.js
badd +7 pages/cottage.js
badd +5 pages/rooms.js
badd +44 components/roomsText.js
badd +14 components/roomsSidePanel.js
badd +295 styles/styles.less
badd +5 pages/garden.js
badd +1 components/hotelSubMenu.js
badd +14 components/gardenSidePanel.js
badd +5 pages/index.js
badd +16 pages/gettinghere.js
badd +1 pages/contact.js
badd +11 pages/attractions.js
badd +1 components/contactText.js
badd +1 ~/Data/WS/oxfordresumes/components/indexText.js
badd +7 pages/facilities.js
badd +1 components/roomsText.js.bak
badd +1 pages/facilities.js.bak
badd +2 pages/location.js
badd +20 components/locationText.js
badd +14 components/locationSidePanel.js
badd +1 components/locationMap.js
badd +10 pages/attractions/gwaiihaanas.js
badd +1 pages/attractions/gwaiihaanas.js.bak
badd +10 pages/attractions/haida.js
badd +4 pages/attractions/wildlife.js
badd +5 components/haidaSidePanel.js
badd +5 components/wildlifeSidePanel.js
badd +18 components/gwaiihaanasSidePanel.js
badd +1 pages/location/gwaiihaanas.js
badd +14 components/locationSubMenu.js
badd +20 components/facilitiesSidePanel.js
badd +14 components/gettingHereSidePanel.js
badd +25 components/facilitiesText.js
argglobal
%argdel
$argadd components/indexText.js
set stal=2
edit components/facilitiesText.js
set splitbelow splitright
set nosplitbelow
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 25 - ((22 * winheight(0) + 19) / 39)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
25
normal! 011|
tabedit components/indexText.js
set splitbelow splitright
set nosplitbelow
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
1argu
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 41 - ((26 * winheight(0) + 19) / 39)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
41
normal! 061|
tabnext 1
set stal=1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOF
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
