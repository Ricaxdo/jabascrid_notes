import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  AlertCircle,
  BookOpen,
  CheckCircle2,
  Code2,
  Lightbulb,
  Star,
} from "lucide-react";

export default function JavaScriptBasicsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="border-border from-muted/30 to-background border-b bg-gradient-to-b">
        <div className="container mx-auto max-w-5xl px-4 py-12 md:py-16 lg:py-20">
          <div className="mb-4 flex items-center gap-3">
            <div className="bg-primary/10 rounded-lg p-2">
              <BookOpen className="text-primary h-6 w-6" />
            </div>
            <Badge variant="secondary" className="font-mono text-xs">
              Página 1
            </Badge>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            JavaScript Básico
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg text-pretty md:text-xl">
            Fundamentos esenciales para dominar JavaScript desde cero
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-8 md:py-12">
        {/* Introducción */}
        <section className="mb-12">
          <div className="mb-6 flex items-start gap-3">
            <div className="shrink-0 rounded-lg bg-blue-500/10 p-2">
              <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h2 className="mb-4 text-2xl font-bold text-blue-600 md:text-3xl dark:text-blue-400">
                ¿Qué es JavaScript?
              </h2>
              <div className="text-foreground/90 space-y-4 leading-relaxed">
                <p>
                  JavaScript es un lenguaje de programación que permite agregar
                  interactividad y lógica a una página web.
                </p>
                <p>
                  Se ejecuta principalmente en el navegador, pero también en el servidor
                  (Node.js).
                </p>
              </div>
            </div>
          </div>

          <Card className="bg-muted/50 border-l-primary border-l-4 p-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="text-primary mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <h3 className="text-muted-foreground mb-2 text-sm font-semibold tracking-wide uppercase">
                  En mis palabras
                </h3>
                <p className="text-foreground leading-relaxed">
                  JavaScript es lo que hace que una web reaccione a lo que hace el
                  usuario.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* ¿Dónde se usa? */}
        <section className="mb-12">
          <div className="mb-6 flex items-start gap-3">
            <div className="shrink-0 rounded-lg bg-blue-500/10 p-2">
              <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-blue-600 md:text-3xl dark:text-blue-400">
              ¿Dónde se usa JavaScript?
            </h2>
          </div>

          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            {[
              "Manejar eventos (clicks, inputs)",
              "Modificar el DOM",
              "Consumir APIs",
              "Crear lógica (condiciones, ciclos)",
            ].map((item, i) => (
              <Card key={i} className="p-4 transition-shadow hover:shadow-md">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                  <p className="text-foreground/90">{item}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="bg-muted/30 p-6">
            <h3 className="text-muted-foreground mb-4 font-mono text-sm font-semibold tracking-wide uppercase">
              Esquema visual
            </h3>
            <div className="flex flex-col items-center gap-3 py-4">
              <div className="bg-background border-border rounded-lg border-2 px-6 py-3 font-medium">
                Usuario
              </div>
              <div className="text-muted-foreground text-xl">↓</div>
              <div className="bg-background border-border rounded-lg border-2 px-6 py-3 font-medium">
                Navegador
              </div>
              <div className="text-muted-foreground text-xl">↓</div>
              <div className="rounded-lg border-2 border-blue-500/30 bg-blue-500/10 px-6 py-3 font-medium text-blue-600 dark:text-blue-400">
                JavaScript
              </div>
              <div className="text-muted-foreground text-xl">↓</div>
              <div className="rounded-lg border-2 border-green-500/30 bg-green-500/10 px-6 py-3 font-medium text-green-600 dark:text-green-400">
                Acción / Respuesta
              </div>
            </div>
          </Card>
        </section>

        {/* Variables */}
        <section className="mb-12">
          <div className="mb-6 flex items-start gap-3">
            <div className="shrink-0 rounded-lg bg-blue-500/10 p-2">
              <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h2 className="mb-4 text-2xl font-bold text-blue-600 md:text-3xl dark:text-blue-400">
                Variables
              </h2>
              <p className="text-foreground/90 mb-6 leading-relaxed">
                Una variable es un espacio en memoria donde guardamos un valor.
              </p>
            </div>
          </div>

          <div className="mb-6 grid gap-4 md:grid-cols-3">
            <Card className="border-blue-500/20 bg-blue-500/5 p-4">
              <code className="font-mono text-sm font-semibold text-blue-600 dark:text-blue-400">
                let
              </code>
              <p className="text-muted-foreground mt-2 text-sm">El valor puede cambiar</p>
            </Card>
            <Card className="border-blue-500/20 bg-blue-500/5 p-4">
              <code className="font-mono text-sm font-semibold text-blue-600 dark:text-blue-400">
                const
              </code>
              <p className="text-muted-foreground mt-2 text-sm">
                El valor NO debe cambiar
              </p>
            </Card>
            <Card className="bg-destructive/5 border-destructive/20 p-4">
              <code className="text-destructive font-mono text-sm font-semibold">
                var
              </code>
              <p className="text-muted-foreground mt-2 text-sm">❌ Casi no se usa</p>
            </Card>
          </div>

          <Card className="border-l-4 border-l-green-500 bg-green-500/5 p-6">
            <div className="mb-3 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
              <h3 className="text-sm font-semibold tracking-wide text-green-600 uppercase dark:text-green-400">
                Ejemplos
              </h3>
            </div>
            <pre className="bg-background border-border overflow-x-auto rounded-lg border p-4">
              <code className="text-foreground font-mono text-sm">{`let edad = 25;
const nombre = "Ricardo";`}</code>
            </pre>
          </Card>

          <Card className="bg-destructive/5 border-l-destructive mt-4 border-l-4 p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-destructive mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <h3 className="text-destructive mb-2 text-sm font-semibold tracking-wide uppercase">
                  Error común
                </h3>
                <p className="text-foreground/90">
                  Usar{" "}
                  <code className="bg-background rounded px-2 py-0.5 font-mono text-sm">
                    const
                  </code>{" "}
                  y luego querer reasignar ❌
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Tipos de datos */}
        <section className="mb-12">
          <div className="mb-6 flex items-start gap-3">
            <div className="shrink-0 rounded-lg bg-blue-500/10 p-2">
              <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h2 className="mb-4 text-2xl font-bold text-blue-600 md:text-3xl dark:text-blue-400">
                Tipos de Datos Básicos
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                JavaScript tiene distintos tipos de datos:
              </p>
            </div>
          </div>

          <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { type: "string", example: '"texto"' },
              { type: "number", example: "10, 3.5" },
              { type: "boolean", example: "true / false" },
              { type: "null", example: "null" },
              { type: "undefined", example: "undefined" },
            ].map((item, i) => (
              <Card key={i} className="p-4 transition-shadow hover:shadow-md">
                <code className="font-mono text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {item.type}
                </code>
                <p className="text-muted-foreground mt-2 font-mono text-sm">
                  {item.example}
                </p>
              </Card>
            ))}
          </div>

          <Card className="bg-muted/30 p-6">
            <h3 className="text-muted-foreground mb-4 font-mono text-sm font-semibold tracking-wide uppercase">
              Esquema rápido
            </h3>
            <pre className="text-foreground/90 font-mono text-sm leading-relaxed">
              {`TIPOS
 ├─ string
 ├─ number
 ├─ boolean
 ├─ null
 └─ undefined`}
            </pre>
          </Card>

          <Card className="bg-destructive/5 border-l-destructive mt-4 border-l-4 p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-destructive mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <h3 className="text-destructive mb-2 text-sm font-semibold tracking-wide uppercase">
                  Trampa
                </h3>
                <p className="text-foreground/90">
                  <code className="bg-background rounded px-2 py-0.5 font-mono text-sm">
                    null
                  </code>
                  {" ≠ "}
                  <code className="bg-background rounded px-2 py-0.5 font-mono text-sm">
                    undefined
                  </code>
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Operadores */}
        <section className="mb-12">
          <div className="mb-6 flex items-start gap-3">
            <div className="shrink-0 rounded-lg bg-blue-500/10 p-2">
              <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h2 className="mb-4 text-2xl font-bold text-blue-600 md:text-3xl dark:text-blue-400">
                Operadores Básicos
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                Sirven para operar valores.
              </p>
            </div>
          </div>

          <Card className="mb-4 border-l-4 border-l-green-500 bg-green-500/5 p-6">
            <div className="mb-3 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
              <h3 className="text-sm font-semibold tracking-wide text-green-600 uppercase dark:text-green-400">
                Ejemplos
              </h3>
            </div>
            <pre className="bg-background border-border overflow-x-auto rounded-lg border p-4">
              <code className="text-foreground font-mono text-sm">{`5 + 3   // suma
10 - 2  // resta
4 * 2   // multiplicación
8 / 2   // división`}</code>
            </pre>
          </Card>

          <Card className="mb-4 border-l-4 border-l-blue-500 bg-blue-500/5 p-6">
            <h3 className="mb-3 text-sm font-semibold tracking-wide text-blue-600 uppercase dark:text-blue-400">
              Comparación
            </h3>
            <pre className="bg-background border-border overflow-x-auto rounded-lg border p-4">
              <code className="text-foreground font-mono text-sm">{`5 === "5"  // false
5 == "5"   // true ❌`}</code>
            </pre>
          </Card>

          <Card className="bg-primary/5 border-l-primary border-l-4 p-6">
            <div className="flex items-start gap-3">
              <Star className="text-primary mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <h3 className="text-primary mb-2 text-sm font-semibold tracking-wide uppercase">
                  Regla de oro
                </h3>
                <p className="text-foreground/90">
                  👉 Usa siempre{" "}
                  <code className="bg-background rounded px-2 py-0.5 font-mono text-sm font-bold">
                    ===
                  </code>
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Condicionales */}
        <section className="mb-12">
          <div className="mb-6 flex items-start gap-3">
            <div className="shrink-0 rounded-lg bg-blue-500/10 p-2">
              <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h2 className="mb-4 text-2xl font-bold text-blue-600 md:text-3xl dark:text-blue-400">
                Condicionales
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                Permiten tomar decisiones.
              </p>
            </div>
          </div>

          <Card className="mb-6 border-l-4 border-l-green-500 bg-green-500/5 p-6">
            <div className="mb-3 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
              <h3 className="text-sm font-semibold tracking-wide text-green-600 uppercase dark:text-green-400">
                Ejemplo
              </h3>
            </div>
            <pre className="bg-background border-border overflow-x-auto rounded-lg border p-4">
              <code className="text-foreground font-mono text-sm">{`if (edad >= 18) {
  console.log("Puede entrar");
} else {
  console.log("No puede entrar");
}`}</code>
            </pre>
          </Card>

          <Card className="bg-muted/30 p-6">
            <h3 className="text-muted-foreground mb-4 font-mono text-sm font-semibold tracking-wide uppercase">
              Esquema mental
            </h3>
            <div className="flex flex-col items-center gap-3 py-4">
              <div className="bg-background border-border rounded-lg border-2 px-6 py-3 font-medium">
                Condición
              </div>
              <div className="text-muted-foreground text-xl">↓</div>
              <div className="grid w-full max-w-md gap-6 sm:grid-cols-2">
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-lg border-2 border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400">
                    true
                  </div>
                  <div className="text-muted-foreground text-xl">↓</div>
                  <div className="bg-background border-border rounded-lg border-2 px-4 py-2 text-sm">
                    acción A
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-destructive/10 border-destructive/30 text-destructive rounded-lg border-2 px-4 py-2 text-sm font-medium">
                    false
                  </div>
                  <div className="text-muted-foreground text-xl">↓</div>
                  <div className="bg-background border-border rounded-lg border-2 px-4 py-2 text-sm">
                    acción B
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* En mis palabras */}
        <section className="mb-12">
          <Card className="from-primary/10 via-primary/5 to-background border-primary/20 border-2 bg-gradient-to-br p-6 md:p-8">
            <div className="mb-4 flex items-start gap-3">
              <Lightbulb className="text-primary h-6 w-6 shrink-0" />
              <h2 className="text-primary text-xl font-bold md:text-2xl">
                En Mis Palabras
              </h2>
            </div>
            <p className="text-foreground/90 text-lg leading-relaxed">
              JavaScript trabaja con variables y tipos de datos para tomar decisiones y
              responder a acciones del usuario. Es la base de todo el frontend.
            </p>
          </Card>
        </section>

        {/* Errores comunes */}
        <section className="mb-12">
          <div className="mb-6 flex items-start gap-3">
            <div className="bg-destructive/10 shrink-0 rounded-lg p-2">
              <AlertCircle className="text-destructive h-5 w-5" />
            </div>
            <h2 className="text-destructive text-2xl font-bold md:text-3xl">
              Errores y Trampas Comunes
            </h2>
          </div>

          <div className="space-y-3">
            {[
              "Confundir = con ===",
              "Pensar que var se comporta igual que let",
              "No entender undefined",
            ].map((error, i) => (
              <Card key={i} className="bg-destructive/5 border-destructive/20 p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-destructive mt-0.5 h-5 w-5 shrink-0" />
                  <p className="text-foreground/90">{error}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Repaso rápido */}
        <section className="mb-12">
          <Card className="bg-muted/50 p-6 md:p-8">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold md:text-3xl">
              <CheckCircle2 className="h-7 w-7 text-green-600 dark:text-green-400" />
              Repaso Rápido
            </h2>
            <div className="space-y-3">
              {[
                "¿Qué es JavaScript?",
                "¿Qué es una variable?",
                "Diferencia entre let y const",
                "Tipos de datos básicos",
                "Uso de if / else",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-background/60 hover:bg-background flex items-center gap-3 rounded-lg p-3 transition-colors"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/10">
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-foreground/90">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Marca de dominio */}
        <section className="mb-12">
          <Card className="to-background border-2 border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-amber-500/5 p-6 md:p-8">
            <div className="mb-4 flex items-start gap-3">
              <Star className="h-6 w-6 fill-amber-500 text-amber-500" />
              <h2 className="text-xl font-bold text-amber-600 md:text-2xl dark:text-amber-400">
                Marca de Dominio
              </h2>
            </div>
            <p className="text-foreground/90 leading-relaxed">
              Cuando te sientas cómodo con este tema → dibuja una ⭐ al lado del título.
            </p>
          </Card>
        </section>

        {/* Siguiente paso */}
        <section>
          <Card className="bg-primary/5 border-primary/20 border-2 p-6 md:p-8">
            <h2 className="text-primary mb-4 text-xl font-bold md:text-2xl">
              👉 Siguiente Paso
            </h2>
            <p className="text-foreground/90 mb-6 leading-relaxed">
              Si quieres, el siguiente tema puede ser:
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="hover:border-primary cursor-pointer p-4 transition-all hover:shadow-md">
                <div className="text-primary mb-2 text-2xl font-bold">1️⃣</div>
                <h3 className="mb-2 font-semibold">Funciones</h3>
                <p className="text-muted-foreground text-sm">
                  Muy importante para entrevistas
                </p>
              </Card>
              <Card className="hover:border-primary cursor-pointer p-4 transition-all hover:shadow-md">
                <div className="text-primary mb-2 text-2xl font-bold">2️⃣</div>
                <h3 className="mb-2 font-semibold">Arrays y métodos</h3>
                <p className="text-muted-foreground text-sm">map, filter, reduce</p>
              </Card>
              <Card className="hover:border-primary cursor-pointer p-4 transition-all hover:shadow-md">
                <div className="text-primary mb-2 text-2xl font-bold">3️⃣</div>
                <h3 className="mb-2 font-semibold">Scope & hoisting</h3>
                <p className="text-muted-foreground text-sm">Nivel entrevista</p>
              </Card>
            </div>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-border mt-16 border-t">
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <p className="text-muted-foreground text-center text-sm">
            Dime cuál seguimos y lo escribimos como si fuera la siguiente página de tu
            libreta 📓✨
          </p>
        </div>
      </footer>
    </div>
  );
}
