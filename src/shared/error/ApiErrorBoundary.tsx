'use client';
import React, { Component, ReactNode } from 'react';

import ApiErrorHandler from './ApiErrorHandler';
import { Level } from './error.type';

interface ApiErrorBoundaryProps {
  children: ReactNode;
  level: Level;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ApiErrorBoundary extends Component<ApiErrorBoundaryProps, State> {
  constructor(props: ApiErrorBoundaryProps) {
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
      return (
        <>
          <ApiErrorHandler error={this.state.error} level={this.props.level} onReset={this.resetError} />
          {this.props.level === 'alert' && this.props.children}
        </>
      );
    }
    return this.props.children;
  }
}

export default ApiErrorBoundary;
