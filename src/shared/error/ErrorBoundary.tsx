'use client';
import { Component, ReactNode } from 'react';

import { PageFallback } from './Fallback/FallBack';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  level?: 'toast' | 'fallback' | 'page';
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) return this.props.fallback;

      return <PageFallback onReset={this.resetError} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
