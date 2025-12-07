async function scan() {
  const url = document.getElementById("url").value;
  const output = document.getElementById("output");

  output.textContent = "🔍 Scanning...";

  const res = await fetch("http://127.0.0.1:5000/scan", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url })
  });

  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
}
