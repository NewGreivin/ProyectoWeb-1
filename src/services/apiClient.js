class APIClient {
  constructor() {
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
    this.timeout = 30000;
  }

  async request(url, options = {}, context = 'API') {
    const mergedOptions = {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      const response = await fetch(url, {
        ...mergedOptions,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(
          `Error ${response.status}: No se pudo conectar a ${context}`
        );
      }

      return await response.json();
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error(`Timeout en ${context} (${this.timeout}ms)`);
      }
      throw error;
    }
  }

  get(url, options = {}, context = 'API') {
    return this.request(url, { method: 'GET', ...options }, context);
  }

  post(url, body, options = {}, context = 'API') {
    return this.request(
      url,
      {
        method: 'POST',
        body: typeof body === 'string' ? body : JSON.stringify(body),
        ...options,
      },
      context
    );
  }
}

export default new APIClient();