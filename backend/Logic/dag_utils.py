from collections import defaultdict, deque

def check_if_dag(nodes, edges):
    graph = defaultdict(list)
    in_degree = defaultdict(int)

    for edge in edges:
        src = edge['source']
        tgt = edge['target']
        graph[src].append(tgt)
        in_degree[tgt] += 1
        if src not in in_degree:
            in_degree[src] = 0

    queue = deque([node for node in in_degree if in_degree[node] == 0])
    visited = 0

    while queue:
        current = queue.popleft()
        visited += 1
        for neighbor in graph[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    return visited == len(in_degree)
