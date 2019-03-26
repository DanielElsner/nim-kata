Die Aufgabe ist, das NIM-Spiel zu implementieren. Gespielt werden sollgegen den Computer.

# Regeln

Das NIM-Spiel  ist  ein Spiel für 2  Personen. Gegeben  ist ein Haufen von 13 Streichhölzern, von dem beide  Spieler abwech-selnd entweder 1, 2 oder 3 Streichhölzer ziehen müssen. 

Wer das letzte Streichholz erhält hat verloren.Das NIM-Spiel hat verschiedene Varianten. Bei der beschriebenen Variante geht es um das Misère-Spiel in einer Reihe bzw. einem Haufen.

Die  Anzahl  der  Streichhölzer,  welche der  Computer  zieht,  kann  zufällig  gewählt  werden.  Dabei  darf  diese  nicht  die  aktuell verfügbaren Streichhölzer überschreiten. Das heißt, wenn nur noch 2 Streichhölzer auf dem Haufen liegen, darf der Computer auch maximal 2 Streichhölzer ziehen.

## Nicht-funktionale Anforderungen

1. Die Anwendung ist in Java-oderTypeScript geschrieben.
2. Als Framework kann z.B. next.js verwendet werden.
3. Die Anwendung ist self-contained und lässt sich über npmstarten.


### Web-Version

Eingesetzte Technologien:
* Typescript
* React (build automagisch durch "create-react-app --typescript")
* jest + enzyme + Testcafe


# Setup


`npm i` Dependencies installieren

`npm start` Dev Server starten 

`npm test` Unittests starten

`npm run testcafe` Testcafe starten 
