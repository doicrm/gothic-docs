---
sidebar_position: 2
---

# Vob

## `Wld_InsertVob`

Tworzy vob na waypoincie lub freepoincie w świecie.

```csharp
func void Wld_InsertVob(var string vobName, var string pointName, var string visualName, var int isCollDet, var int isSetOnFloor) {};
```

:::info Przykład użycia

```csharp
Wld_InsertVob("DEMONPORTAL01", "FP_DEMONPORTAL_01", "ORGANICFOG.PFX", FALSE, FALSE);
```

:::

## `Wld_InsertVobPos`

Tworzy vob na konkretnych współrzędnych w świecie.

```csharp
func void Wld_InsertVobPos(var string vobName, var int posX, var int posY, var int posZ, var string visualName, var int isCollDet, var int isSetOnFloor) {};
```

:::info Przykład użycia

```csharp
Wld_InsertVobPos("DEMONPORTAL01", 29948, 4630, -16982, "ORGANICFOG.PFX", FALSE, FALSE);
```

:::

## `Wld_RemoveVob`

Usuwa vob o konkretnej nazwie ze świata.

```csharp
func int Wld_RemoveVob(var string vobName) {};
```

:::info Przykład użycia

```csharp
Wld_RemoveVob("DEMONPORTAL01");
```

:::

## `Vob_Rotate`

Służy do obracania voba o konkretnej nazwie w świecie gry.

```csharp
func void Vob_Rotate(var string vobName, var int posX, var int posY, var int posZ) {};
```

:::info Przykład użycia

```csharp
Vob_Rotate("DEMONPORTAL01", 180, 360, 90);
```

:::

## `Vob_SetVisual`

Zmienia wygląd vob o konkretnej nazwie w świecie.

```csharp
func void Vob_SetVisual(var string vobName, var string visualName) {};
```

:::info Przykład użycia

```csharp
Vob_SetVisual("DEMONPORTAL01", "FIRE.PFX");
```

:::

## `Vob_ClearVisual`

Usuwa wygląd vob o konkretnej nazwie w świecie.

```csharp
func void Vob_ClearVisual(var string vobName) {};
```

:::info Przykład użycia

```csharp
Vob_ClearVisual("DEMONPORTAL01");
```

:::

## `Vob_MoveTo`

Przenosi vob o konkretnej nazwie na waypoint/freepoint lub inny vob o konkretnej nazwie w świecie.

```csharp
func void Vob_MoveTo(var string vobName, var string pointName) {};
```

:::info Przykład użycia

```csharp
Vob_MoveTo("DEMONPORTAL01", "OC1");
```

:::

## `Vob_MoveToPos`

Przenosi vob o konkretnej nazwie na konkretne współrzędne w świecie.

```csharp
func void Vob_MoveToPos(var string vobName, var int posX, var int posY, var int posZ) {};
```

:::info Przykład użycia

```csharp
Vob_MoveToPos("DEMONPORTAL01", 1, 2, 3);
```

:::
