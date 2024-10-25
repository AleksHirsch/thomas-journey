type Choice = {
  title: string
  description: string
}

export type ScreenContent =
  | {
      paragraphs: string[]
      choices?: Choice[]
      results?: never
    }
  | {
      paragraphs?: never
      choices?: never
      results: string[][]
    }

export const gameContent: ScreenContent[] = [
  {
    paragraphs: [
      'W odległej krainie, gdzie smoki leniwie popijają herbatę, a wróżki wesoło grają w karty, mieszkał sobie pewien czarodziej o imieniu... Tomek.',
      'Ale nie byle jaki to był czarodziej – potężniejszy niż Merlin, bardziej stylowy niż Gandalf i zdecydowanie bardziej uroczy niż kot w butach.',
    ],
  },
  {
    paragraphs: [
      'Miał on jednak jedną wielką słabość – swojego wiernego, futrzastego przyjaciela, pieska o imieniu Rafi.',
      'Pewnego dnia, ku rozpaczy Tomka, jego ukochany piesek zachorował na bardzo rzadką, magiczną chorobę – Przewlekłe Bycie Marudą.',
    ],
  },
  {
    paragraphs: [
      'Tylko jedna rzecz mogła go uratować – niezwykle rzadkie smaczki rosnące w głębi Pijackiego Lasu, gdzie drzewa szepczą tajemnicze zaklęcia, a mieszkańcy lasu...',
      'cóż, nie zawsze są trzeźwi. Tomek nie miał zbyt dużo doświadczenia w wyprawach i obawiał się co go spotka, ale jego dobre serduszko i ciągłe marudzenia pieska zmotywowało go do działania.',
      'Spakował trunki, wziął swoją różdżkę przywdział płaszcz i ruszył w drogę w stronę Pijackiego Lasu.',
    ],
  },
  {
    paragraphs: [
      'Tomek szybko dotarł do Pijackiego Lasu i już miał wchodzić do środka, gdy nagle z krzaków wyskoczył mężczyzna w eleganckim garniturze, z teczką w ręku i czapką z daszkiem na głowie.',
      '– Stop! Ani kroku dalej! – zawołał stanowczo urzędnik Piotrek.',
      'Tomek zdziwiony zatrzymał się, a urzędnik kontynuował:',
      '– Wstęp do Pijackiego Lasu bez odpowiedniego wniosku jest surowo zabroniony! Gdzie podpisik, wariacie?',
    ],
  },
  {
    paragraphs: [
      'Tomek, zdezorientowany, odpowiedział:',
      'Jaki podpisik?',
      '– No jak to jaki? Podpis ministra ds. trzeźwości na wniosku o wstęp do lasu. Bez tego ani rusz. Więc jeśli nie masz wniosku to zapraszam do urzędu, najbliższy termin za 3 tygodnie.',
      'Tomek musiał się szybko zdecydować, co zrobić. Nie mógł tyle czekać, bo Rafi by go wykończył marudzeniem. ',
    ],
    choices: [
      {
        title: 'Wyczarować podpisik.',
        description:
          'Użyć swojej czarodziejskiej mocy, by podrabiać biurokratyczny dokument. Czy urzędnik da się na to nabrać?',
      },
      {
        title: 'Próbować przekupić urzędnika wódeczką.',
        description:
          'Każdy urzędnik ma swoje słabości, a w Pijackim Lesie wódka to waluta nieoceniona. Może butelczyna sprawi, że Piotrek przymknie oko na brak podpisu?',
      },
      {
        title: 'Spróbować prześlizgnąć się inną drogą.',
        description:
          'Obejść las bocznymi ścieżkami, ryzykując, że po drodze wpadnie na jakiegoś jeszcze bardziej upierdliwego urzędnika… albo coś gorszego?',
      },
    ],
  },
  {
    results: [
      [
        'Piotrek nie dał się zwieść magicznym sztuczkom Tomka i kazał mu się wynosić. Tomek krążąc wzdłuż granicy lasu znalazł niestrzeżone wejście i znalazł się w gęstwinie.',
      ],
      [
        'Piotrek zgadza się na szybkiego kielona i w zamian pokazuje Tomkowi niestrzeżone wejście do lasu prowadzące przez gęste krzaki.',
      ],
      ['Tomek długo krąży wzdłuż lasu aż znajduje niestrzeżone wejście i wchodzi w gęste krzaki.'],
    ],
  },
  {
    paragraphs: [
      'Tomek przedziera się z trudem przez krzaki, zwracając uwagę na odgłos chlupiącej wody i dziwnej melodii dochodzącej zza krzaków. Tomek wyjrzał lekko się wychylił, by odkryć... ogra',
      'Gigantyczny ogr o imieniu Krzysztof siedział pośrodku ogromnego bajorka, kąpiąc się w jego błotnistej wodzie, nucąc pod nosem hymn Lecha Poznań i rzucając sobie kamyczki, które lądowały z pluskiem na brzegu.',
      'Tomek zatrzymał się, nieco zaniepokojony, ale Krzysztof, dostrzegając go, natychmiast uśmiechnął się szeroko, jakby zobaczył dawno niewidzianego kolegę z trybun stadionu.',
    ],
  },
  {
    paragraphs: [
      '– Ooo, witaj, czarodzieju! Co cię sprowadza w te strony? – zawołał ogr, podnosząc się z wody.',
      'Tomek, trochę zbity z tropu, odpowiedział:',
      '– Eee, wędruję po Pijackim Lesie, szukam smaczków, które pomogą wyleczyć mojego pieska...',
      'Krzysztof zmarszczył brwi, jakby chciał pomóc, ale nie do końca wiedział jak.',
    ],
  },
  {
    paragraphs: ['Tomek westchnął, wiedząc, że nie ma innego wyjścia. Krzysztof kontynuował:'],
    choices: [
      {
        title: 'Zagrajmy w mecz! ',
        description:
          'Mały czarodziej kontra wielki ogr. Jeśli strzelisz mi gola, możesz iść dalej.',
      },
      {
        title: 'Zaśpiewaj mi hymn Lecha Poznań!',
        description:
          'Jeśli trafisz we właściwe nuty, możesz liczyć na bezpieczny przejazd przez moje tereny.',
      },
      {
        title: 'Podrap mnie po plecach!',
        description:
          'Jestem za duży, żeby dosięgnąć w odpowiednie miejsce, a strasznie mnie swędzi',
      },
    ],
  },
  {
    results: [
      [
        'Krzysztof zadowolony z wykonanego przez Tomka zadania pozwala mu ruszyć dalej przez jego podwórko. Tomek uradowany, że takie przyjazne istoty mieszkają w lesie, odetchnął z ulgą i ruszył w dalszą podróż.',
      ],
      [
        'Krzysztof zadowolony z wykonanego przez Tomka zadania pozwala mu ruszyć dalej przez jego podwórko. Tomek uradowany, że takie przyjazne istoty mieszkają w lesie, odetchnął z ulgą i ruszył w dalszą podróż.',
      ],
      [
        'Krzysztof zadowolony z wykonanego przez Tomka zadania pozwala mu ruszyć dalej przez jego podwórko. Tomek uradowany, że takie przyjazne istoty mieszkają w lesie, odetchnął z ulgą i ruszył w dalszą podróż.',
      ],
    ],
  },
  {
    paragraphs: [
      'Droga wydawała się wręcz sielankowa: delikatny wietrzyk, szum drzew, śpiew ptaków.',
      'Tomek szedł dalej przez Pijacki Las, rozmyślając o Rafciu, kiedy nagle z krzaków wyskoczył leprechaun, uśmiechając się szeroko i ukazując swoje złote zęby.',
    ],
  },
  {
    paragraphs: [
      'To był Marcin, znany w okolicy z tego, że zawsze miał coś na sprzedaż.',
      '– Hej, czarodzieju! – zawołał Marcin – Słyszałem, że szukasz rzadkich smaczków! Ale mam dla ciebie lepszą ofertę.',
      'Co powiesz na pokaz tańca mojego ludu? Tylko dla ciebie! W zamian poproszę o... niewielką zapłatę.',
      'Tomek spojrzał na leprechauna z niedowierzaniem. Marcin wyglądał jakby przyjechał z innej bajki. Marcin kontynuował:',
      '– Wiesz, my leprechauni jesteśmy świetnymi tancerzami! Taki taniec może przynieść szczęście, a ja obiecuję, że na końcu tańca powiem ci, gdzie znajdziesz rzadkie smaczki, które szukasz!',
    ],
  },
  {
    paragraphs: ['Tomek westchnął, wiedząc, że nie ma innego wyjścia. Krzysztof kontynuował:'],
    choices: [
      {
        title: 'Zgodzić się na taniec i zapłacić Marcinowi',
        description:
          'W ten sposób zobaczy pokaz leprechauna i może rzeczywiście dowie się, gdzie rosną rzadkie smaczki.',
      },
      {
        title: 'Spławić Marcina i powiedzieć, że nie ma czasu na jego sztuczki',
        description: 'Tomek musi się spieszyć do Rafcia',
      },
      {
        title: 'Zaproponować Marcinowi wspólny taniec',
        description:
          'Tomek mógłby spróbować zatańczyć razem z leprechaunem wtedy szczęście się podwoi, prawda?',
      },
    ],
  },
  {
    results: [
      [
        'Gdy Tomek sięgał po sakiewkę, zauważył, że jej nie ma! Odwrócił wzrok w stronę miejsca gdzie przed chwilą był Marcin i zobaczył zgraję leprechaunów uciekających z jego sakiewką',
      ],
      [
        'Tomek obraża Marcina swoim zachowaniem:',
        '– A więc tak! – warknie Marcin, a z lasu wyłoni się jego banda leprechaunów. – Chciałeś nas zlekceważyć, czarodzieju? To teraz zapłacisz!',
        'Tomek zostaje zaatakowany przez bandę leprechaunów i okradziony ze złota.',
      ],
      [
        'Gdy razem tańczą Marcin podstawia specjalnie nogę Tomkowi, który się przewraca i zostaje zaatakowany przez leprechauny. Pobity i okradziony Tomek patrzy jak leprechauny uciekają nabijając się z niego',
      ],
    ],
  },
  {
    paragraphs: [
      'Tomek godzi się ze stratą i rusza dalej. Nieco bardziej przybity zastanawia się nad tym co go spotkało.',
      'Został okradziony przez bandę skrzatów. Skoro skrzaty są takie niebezpieczne to co jeszcze go spotka w tym lesie. Rozmyślanie Tomka przerwał czyjś krzyk.',
    ],
  },
  {
    paragraphs: [
      '– Ej, czarodziej! – z ciemności wyłonił się Michał, typowy łotrzyk z kapturkiem na głowie i sztyletem w ręce. - Dawaj złoto, albo... albo czekają cię kłopoty!',
      'Tomek nieco zaskoczony, ale pewny siebie odpowiedział:',
      '- Nie mam czasu na takie głupoty. Spływaj stąd zanim ci nie zrobię krzywdy! - Przecież to tylko człowiek. Z łatwością go pokonam przy użyciu magii. Już dostałem swoją nauczkę, nie dam się pokonać drugi raz - pomyślał Tomek.',
    ],
  },
  {
    paragraphs: [
      '- No dobra, skoro tak... - powiedział zakładając bokserską szatę i wypijając eliksir o nazwie pięściogrom dający  +10 do siły ataku.',
      'Tomek poczuł, jak miękną mu kolana na widok Michała, który teraz emanował czystą siłą i sportową zaciętością. Miał jednak trzy opcje, jak wybrnąć z tej trudnej sytuacji:',
    ],
    choices: [
      {
        title: 'Stanąć do walki!',
        description: 'Może Michał go nie zabije',
      },
      {
        title: 'Spróbować ucieczki!',
        description: '',
      },
      {
        title: 'Zaproponować Michałowi pojedynek... na picie!',
        description: '',
      },
    ],
  },
  {
    results: [
      ['Tomek postanawia stanąć do walki.'],
      [
        'Tomek bierze nogi za pas i stara się jak najszybciej uciec, lecz Michał z łatwością go dogania. Tomek uświadamia sobie, że ucieczka nic nie da',
      ],
      [
        'Michał chwilę się zastanawiał, ale uznał, że nie będzie pił z kimś kto go zlekceważył. Tomek musi stanąć do walki',
      ],
    ],
  },
  {
    paragraphs: [
      'Nie mineło długo jak z walki Tomka z Michałem zrobiło się niemałe zbiegowisko. Pojawili się biznesmeni obstawiający wynik walki. Wśród publiczności Tomek zauważył nawet bandę leprechaunów z jego pieniędzmi.',
      'Nie zdążył się lepiej rozejrzeć, bo Michał już ruszył na niego z pięściami. Świat nagle zawirował, a potem nastała ciemność.',
    ],
  },
  {
    paragraphs: [
      'Tomek powoli otworzył oczy, czując, jak każdy kawałek jego ciała protestuje. Był poobijany i wyraźnie miał za sobą nieprzyjemne przygody.',
      'Rozglądając się, zauważył, że leży w małej polanie otoczonej drzewami, a obok niego siedzi Gaweł, miejscowy chłop, znany z tego, że pędzi bimber w swoim domku tuż obok Pijackiego Lasu.',
    ],
  },
  {
    paragraphs: [
      'Gaweł, z butelką w dłoni, zerknął na Tomka, a jego twarz rozjaśniła się szerokim uśmiechem.',
      '– A, w końcu się obudziłeś! – zawołał radośnie. – Jak tam, czarodzieju? Po przygodach w lesie? Mam tu coś dla ciebie! Gżdylnij sobie! – dodał, podając butelkę do Tomka.',
    ],
  },
  {
    paragraphs: [
      'Tomek spojrzał na Gawła z lekkim niedowierzaniem. Czy powinien się napić? Może to był klucz do jego kolejnych przygód, a może prosto wprost do kłopotów?',
    ],
    choices: [
      {
        title: 'Przyjąć gżdylka, zabrać butelkę i uciec w krzaki',
        description: 'Może Michał go nie zabije',
      },
      {
        title: 'Przyjąć gżdylka i opowiedzieć Gawłowi co się stało',
        description: '',
      },
      {
        title: 'Zaśpiewać z Gawłem Szanty',
        description: '',
      },
    ],
  },
  {
    results: [
      [
        'Gaweł patrzył w osłupieniu i pognał za Tomkiem w krzaki krzycząc moja wódeczka. Dogania Tomka i zaczynają rozmawiać o tym co ich sprowadza do lasu.',
      ],
      ['Gaweł chillował do opowieści Tomka popijając gżdylek, za gżdylkiem'],
      [
        'Kiedy rum zaszumi w głowie. Cały świat nabiera treści, Wtedy chętnie słucha człowiek. Morskich opowieści…',
      ],
    ],
  },
  {
    paragraphs: [
      'Po wspólnie spędzonym czasie Gaweł oferuje pomoc Tomkowi.',
      '- Znam dobrze bossa mafii zielarzy. Myślę, że oni powinni wiedzieć gdzie możesz znaleźć smaczki dla Rafika - powiedział Gaweł.',
      '- Ruszajmy zatem - odpowiedział Tomek.',
    ],
  },
  {
    paragraphs: [
      'Szybko dotarli do miejsca, gdzie ścieżki rozdzielały się w dwóch kierunkach. Na prawo prowadziła droga otoczona wulkanicznymi skałami, a w oddali słychać było bulgoczący dźwięk lawy.',
      '– Idąc tą trasą czujesz się jak kiełbaska na grillu! – zawołał Gaweł. – Ale za to na trasie sprzedają zimne piwerko!',
      'Na lewo prowadziła droga usiana kolorowymi kwiatami, które delikatnie pachniały. – A tu… – zaczął Gaweł, ale jego entuzjazm szybko opadł. – To tylko kwiatki, ale za nimi czai się grupa pracowników banku. Jak tylko zobaczą czarodzieja, będą cię namawiać do założenia konta!',
      '– Możemy też iść na szagę. Ta droga może być nieco dzika… – powiedział Gaweł, wskazując na gęstwinę. – Ale są tam potwory, które kochają grać w karty. Tylko musisz być dobry w blefowaniu!',
      'Tomek spojrzał na każdą z dróg i musiał podjąć decyzję. Którą trasę wybierze?',
    ],
    choices: [
      {
        title: 'Morze Lawy z zimnym piwerkiem.',
        description: '',
      },
      {
        title: 'Kwiaty, ale z natrętnymi pracownikami banku.',
        description: '',
      },
      {
        title: 'Dziką trasę przez las z szansą na partyjkę pokerka.',
        description: '',
      },
    ],
  },
  {
    results: [
      [
        'Idąc wzdłuż morza lawy, Tomek i Gaweł czuli jak zaczyna im burczeć w brzuchach.',
        '- Chyba pora na małe co nieco - powiedział Gaweł, wyjmując kiełbaskę z kieszeni i nabijając ją na patyk.',
        'Będziesz ją tutaj piekł? - zapytał Tomek z niedowierzaniem',
        'Tak - odpowiedział Gaweł otwierając zakupione wcześniej piwerko i wyciągając nogi nad brzegiem lawy',
        'No dobra - powiedział entuzjastycznie Tomek, siadając obok i otwierając piwerko',
      ],
      [
        'Wędrując przez pole kwiatów, Tomek i Gaweł czuli się jak w bajce. Kwiaty falowały na wietrze, ptaszki śpiewały, a słońce świeciło nad ich głowami.',
        '– Aż chce się hopsać! – zawołał Tomek, na co Gaweł od razu odpowiedział energicznym skokiem.',
        'I tak zaczęli wesoło hopsać jak Shrek i Fiona wśród kwiatów, a każde ich podskoczenie wzbudzało śmiech i euforię. W tle pojawili się sprzedawcy z broszurami, którzy patrzyli na nich z niedowierzaniem, ale Tomek i Gaweł nic sobie z tego nie robili.',
      ],
      [
        'Gęsty las otoczył ich niczym tajemniczy labirynt. Z każdej strony słychać było szelest liści i chichot ukrytych stworzeń. W końcu Tomek i Gaweł natknęli się na grupkę potworów grających w karty przy ognisku.',
        '– Masz jakieś czwórki? – zapytał jeden z potworów.',
        '– Nie, ale mam króle... – odpowiedział inny.',
        'Potwory spojrzały na nich obojętnie.',
        'Gracie? - zapytał pierwszy z potworów.',
        'Gramy! - odpowiedzieli oboje.',
        'Kilka godzin później bohaterowie uznali, że chyba czas na nich i udali się w dalszą podróż.',
      ],
    ],
  },
  {
    paragraphs: [
      'Po jakimś czasie dotarli do Wróżkowej Doliny, ostatnim przystanku dzielącym ich od terytorium Mafii Zielarzy. Wróżkowa Polana była pełna Wróżkowej Polany, pełna blasku i magii.',
      'Z każdej strony docierały do nich dźwięki delikatnej muzyki, a wszędzie wokoło latało pełno wróżek.',
      'Jedna z wróżek o imieniu Mati, w pięknej, błyszczącej sukni szczególnie zainteresowała się przybyszami i latała dookoła nich. Tomek mógł:',
    ],
    choices: [
      {
        title: 'Zatrzymać się i podziwiać piękno wróżka Matiego.',
        description: '',
      },
      {
        title: 'Wyjąć packę na muchy i przegonić natręta.',
        description: '',
      },
      {
        title: 'Zaprzyjaźnić się wypijając Bruderschafta',
        description: '',
      },
    ],
  },
  {
    paragraphs: [
      'Tomek nie zdążył wcielić swojego planu w życie, ponieważ zanim podjął decyzję, Gaweł zamachnął się i pacnął Matiego.',
      'Przeklęte robactwo!',
      'Mati poleciał daleko poza obszar lasu i wszelki słuch o nim zaginął.',
      'Następnie bohaterowie docierają na terytorium Mafii Zielarzy i udają się prosto na rozmowę z bossem, Pawłem Bujnowłosym.',
    ],
  },
  {
    paragraphs: [
      '– A więc to wy – powiedział Paweł, leniwie głaszcząc króliczki. – Gaweł, dawno się nie widzieliśmy. A to pewnie Tomek, ten czarodziej, który szuka ratunku dla swojego psiaka.',
      'Tomek skinął głową, próbując nie zwracać uwagi na króliczki, które biegały między jego nogami i podgryzały jego buty.',
      '– Potrzebujemy rzadkich smaczków, które uratują Rafika – powiedział Tomek. – Wiem, że wy macie dostęp do wszystkiego, co rośnie w tym lesie.',
      'Paweł spojrzał na niego z lekkim uśmiechem, po czym powiedział:',
      '– To prawda, króliczki są ekspertami od smaczków. Znamy każdy liść, każdą łodyżkę w tym lesie. Ale... – tu jego ton stał się poważniejszy – nic nie ma za darmo.',
    ],
  },
]
