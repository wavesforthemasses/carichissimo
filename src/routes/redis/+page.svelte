<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let newValue = '';
</script>

<div class="redis-container">
    <h1>Redis Example</h1>

    <div class="current-value">
        <h2>Current Value:</h2>
        <p>{data.data ?? 'No value stored'}</p>
    </div>

    <form method="POST" action="?/set" class="redis-form">
        <input 
            type="text" 
            name="value" 
            bind:value={newValue} 
            placeholder="Enter a value"
            required
        />
        <button type="submit">Set Value</button>
    </form>

    <form method="POST" action="?/delete">
        <button type="submit" class="delete-btn">Delete Value</button>
    </form>
</div>

<style>
    .redis-container {
        max-width: var(--container-sm);
        margin: var(--space-8) auto;
        padding: 0 var(--space-4);
    }

    h1 {
        color: var(--primary);
        font-size: var(--text-3xl);
        margin-bottom: var(--space-6);
    }

    h2 {
        font-size: var(--text-xl);
        color: var(--gray-700);
        margin-bottom: var(--space-2);
    }

    .current-value {
        background: var(--gray-100);
        padding: var(--space-4);
        border-radius: var(--radius-md);
        margin-bottom: var(--space-6);
    }

    .current-value p {
        color: var(--gray-800);
        font-size: var(--text-lg);
    }

    .redis-form {
        display: flex;
        gap: var(--space-2);
        margin-bottom: var(--space-4);
    }

    input {
        flex: 1;
        padding: var(--space-2);
        border: 1px solid var(--gray-300);
        border-radius: var(--radius-md);
        font-size: var(--text-base);
    }

    button {
        background: var(--primary);
        color: var(--primary-reverse);
        padding: var(--space-2) var(--space-4);
        border: none;
        border-radius: var(--radius-md);
        cursor: pointer;
        transition: background-color var(--transition-fast) var(--ease-in-out);
    }

    button:hover {
        background: var(--primary-dark);
    }

    .delete-btn {
        background: var(--gray-500);
    }

    .delete-btn:hover {
        background: var(--gray-600);
    }
</style>
