---
sidebar_position: 4
---

# Pozostałe

## `Wld_GetPlayerPortalName`

Sprawdza, czy postać gracza znajduje się wewnątrz portalu o konkretnej nazwie.

```csharp
func int Wld_GetPlayerPortalName(var string portalName) {};
```

:::info Przykład użycia

```csharp
if (Wld_GetPlayerPortalName("hütte2"))
{
    // ...
};
```

:::

## `AI_TurnToWP`

Obraca NPC do konkretnego waypointa w świecie.

```csharp
func string AI_TurnToWP(var C_NPC npc, var string wpName) {}; 
```

:::info Przykład użycia

```csharp
AI_TurnToWP(self, "OC1");
```

:::

## `AI_TurnToVob`

Obraca NPC do konkretnego freepointa lub voba w świecie. Działa podobnie do `AI_TurnToWP`.

```csharp
func string AI_TurnToVob(var C_NPC npc, var string vobName) {}; 
```

:::info Przykład użycia

```csharp
AI_TurnToVob(self, "DEMONPORTAL01");
```

:::
