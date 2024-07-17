---
sidebar_position: 1
---

# NPC

## `Npc_GetRoutineName`

Pobiera nazwę aktualnej rutyny NPC.
**WiP - nie działa poprawnie!**

```csharp
func string Npc_GetRoutineName(var C_NPC npc) {};
```

:::info Przykład użycia

```csharp
Print(Npc_GetRoutineName(self));
```

:::

## `Npc_IsInRoutineName`

Sprawdza, czy NPC znajduje się w rutynie o podanej nazwie.

```csharp
func int Npc_IsInRoutineName(var C_NPC npc, var string routineName) {};
```

:::info Przykład użycia

```csharp
if (Npc_IsInRoutineName(self, "Start"))
{
    // ...
};
```

:::

## `Npc_GetSlotItem`

Sprawdza, co znajduje się w konkretnym slocie modelu NPC.

```csharp
func int Npc_GetSlotItem(var C_NPC npc, var string slotName) {};
```

:::info Przykład użycia

```csharp
var C_Item torch; torch = Npc_GetSlotItem(slf, "ZS_LEFTHAND");

if (!Hlp_IsValidItem(torch)) { return FALSE; };

return Hlp_IsItem(torch, ItLsTorchBurning) || Hlp_IsItem(torch, ItLsTorchBurned);
```

:::

## `Npc_EquipItem`

Wyekwipowanie przez NPC dowolnego przedmiotu.

```csharp
func int Npc_EquipItem(var C_NPC npc, var C_Item itm) {};
```

:::info Przykład użycia

```csharp
Npc_EquipItem(self, ItLsTorch);
```

:::

## `Npc_IsInWorld`

Sprawdza, czy NPC przebywa w świecie. Alternatywa dla `Npc_IsDead`. Czasem może zwrócić złą wartość.

```csharp
func int Npc_IsInWorld(var C_NPC npc) {};
```

:::info Przykład użycia

```csharp
if (Npc_IsInWorld(self))
{
    // ...
};
```

:::