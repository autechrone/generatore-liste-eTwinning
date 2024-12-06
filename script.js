<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.6">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">// script.js</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Function to generate unique two-digit numbers</span></p>
<p class="p1"><span class="s1">function generateUniqueTwoDigitNumbers(count) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (count &gt; 100) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>throw new Error("Non è possibile generare più di 100 numeri a due cifre.");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const numbers = new Set();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>while (numbers.size &lt; count) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const num = Math.floor(Math.random() * 100); // Generates 0 to 99</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>numbers.add(num.toString().padStart(2, '0')); // Ensure two digits</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return Array.from(numbers);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Function to create list entries</span></p>
<p class="p1"><span class="s1">function createListEntries(listType) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const twoDigitNumbers = generateUniqueTwoDigitNumbers(35);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const entries = twoDigitNumbers.map((num, index) =&gt; `${index + 1}-${num}`);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>listType: listType,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>entries: entries</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>};</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Function to compile lists into text content</span></p>
<p class="p1"><span class="s1">function compileListsText(classeList, controlloList) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>let textContent = `### ${classeList.listType}\n`;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>classeList.entries.forEach(entry =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>textContent += `${entry}\n`;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>textContent += `\n---\n\n`;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>textContent += `### ${controlloList.listType}\n`;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>controlloList.entries.forEach(entry =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>textContent += `${entry}\n`;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>});</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>return textContent;</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Function to trigger download of a text file</span></p>
<p class="p1"><span class="s1">function downloadTextFile(filename, content) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const blob = new Blob([content], { type: 'text/plain' });</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const url = URL.createObjectURL(blob);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const a = document.createElement('a');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>a.href = url;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>a.download = filename;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>a.setAttribute('aria-label', `Scarica ${filename}`);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>document.body.appendChild(a);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>a.click();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>document.body.removeChild(a);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>URL.revokeObjectURL(url);</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Main function to generate and download the list</span></p>
<p class="p1"><span class="s1">function generateAndDownloadList() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>try {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// Update status</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const statusDiv = document.getElementById('status');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>statusDiv.textContent = "Generazione in corso...";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// Generate both lists</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const classeList = createListEntries("classe eTwinning");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const controlloList = createListEntries("gruppo di controllo");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// Compile text</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const compiledText = compileListsText(classeList, controlloList);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// Define filename with timestamp for uniqueness</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const now = new Date();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const timestamp = now.toISOString().replace(/[:.]/g, '-');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const filename = `lista_etwinning_controllo_${timestamp}.txt`;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// Trigger download</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>downloadTextFile(filename, compiledText);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// Update status</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>statusDiv.textContent = `Lista generata e scaricata con successo come "${filename}".`;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>} catch (error) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// Handle errors gracefully</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const statusDiv = document.getElementById('status');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>statusDiv.textContent = `Errore: ${error.message}`;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>console.error(error);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// Attach event listener to the button</span></p>
<p class="p1"><span class="s1">document.getElementById('generateBtn').addEventListener('click', generateAndDownloadList);</span></p>
</body>
</html>
