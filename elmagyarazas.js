/*
Fontos, hogy alapból milyen elemek vannak
display tulajdonságok 
egymás alatt vagy egy sorban egymás mellett 
1. grid
2. flex
3. block
4. inline 
5. inline-block
6. table 
7. table-cell 
és még van rengeteg pl.li ul ilyenek 
fontos, hogy alapból melyikek az inline-ok pl. a-tag, button, input, img!!!!! 
display: inline-nál nincsen magasság és szélesség ,ezért van inline-block, hogy ezt is be lehessen állítani 

poziciónálás 
1. static 
    Ez az alapbeeállítás, megy a dolkumentum flow-val és nincsenek left, right, top, bottom 
2. relative 
    Itt már van left, right, top, bottom és fontos, hogy ezt a többi elemtől nézi 
    tehát top: 200px az előtte lévő elem aljától lesz ennyire 
3. absolute 
    itt is van left, right stb. de ezt a képernyőtől nézi pl. a top-ot a képernyő tetejétől és akkor az mindig annyira lesz, amit megadtunk 
    fontos, hogy ez nem a látható képernyő, tehát ha megyünk lefele, akkor ez nem fog vele jönni hanem ott marad mindig felül 
4. fixed
    ez meg mindig a látható képernyőt nézi, tehát ha megyünk lefele vagy felfele ez mindig annyira lesz mint a látható képernyőtől, amit megadtunk 
5. sticky 
    ez relative-ként fog viselkedni az elején, figyelembe veszi a körülőtte lévő elemeket és azoktól lesz egy bizonyos távolságra, de ha megyünk 
    lefele és elértük ezt a sticky-t, akkor átváltozik fixed-é és a teljes képernyőtől lesz annyira, amit megadtunk 
*/