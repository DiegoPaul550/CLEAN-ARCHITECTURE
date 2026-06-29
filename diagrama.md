# Diagrama de Componentes

```mermaid
flowchart TB

    Presentation
    Application["Application<br/>(Use Cases)"]
    Domain["Domain<br/>(Entities + Interfaces)"]
    Infrastructure["Infrastructure<br/>(Repositories)"]

    Presentation --> Application
    Presentation --> Infrastructure
    Application --> Domain
    Infrastructure -. Implementa .-> Domain