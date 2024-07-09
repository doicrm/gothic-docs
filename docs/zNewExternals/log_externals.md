---
sidebar_position: 3
---

# Log

## `Log_GetTopicStatus`

Pobiera status zadania.

```csharp
func int Log_GetTopicStatus(var string topicName) {};
```

**Parametry**

- `var string topicName`   
    Unikalny ciąg znaków używany do identyfikacji tematu w dzienniku

:::info Przykład użycia

```csharp
if (Log_GetTopicStatus(Topic_InnosEye) == LOG_SUCCESS)
{
    // ...
};
```

:::

Obsługiwane statusy:
- `LOG_RUNNING` - zadanie jest w toku
- `LOG_SUCCESS` - zadanie zakończyło się sukcesem
- `LOG_FAILED` - zadanie zakończyło się porażką
- `LOG_OBSOLETE` - zadanie zostało porzucone
- `-1` - zadanie nie pojawiło się jeszcze w dzienniku zadań
