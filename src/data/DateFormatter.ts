const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});

export default { formatDate: (date: Date) => longEnUSFormatter.format(date) };